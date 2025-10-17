import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { useEditorSocketStore } from '../../../store/editorSocketStore';
import { useActiveFileTabStore } from '../../../store/activeFileTabStore';

export const EditorComponent = () => {
  const [editorState, setEditorState] = useState({ theme: null });
  const { editorsocket } = useEditorSocketStore();
  const { activeFileTab, setActiveFileTab } = useActiveFileTabStore();

  // Fetch theme safely
  async function downloadTheme() {
    try {
      const response = await fetch('/Dracula.json');
      if (!response.ok) throw new Error("Failed to load theme");
      const data = await response.json();
      setEditorState(prev => ({ ...prev, theme: data }));
    } catch (err) {
      console.error("Error loading theme:", err);
    }
  }

  // Apply theme when editor mounts
  function handleEditorTheme(editor, monaco) {
    if (!editorState.theme) return; 
    try {
      monaco.editor.defineTheme('dracula', editorState.theme);
      monaco.editor.setTheme('dracula');
    } catch (err) {
      console.error("Failed to apply theme:", err);
    }
  }

  // Subscribe to socket events safely
  useEffect(() => {
    if (!editorsocket) return;

    const handleReadFileSuccess = (data) => {
      console.log("Read file success", data);
      if (data?.path && data?.value) {
        setActiveFileTab(data.path, data.value);
      }
    };

    editorsocket.on("readFileSuccess", handleReadFileSuccess);

    return () => {
      editorsocket.off("readFileSuccess", handleReadFileSuccess);
    };
  }, [editorsocket, setActiveFileTab]);

  // Download theme on mount
  useEffect(() => {
    downloadTheme();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {editorState.theme && (
        <Editor
          height="80vh"
          width="100%"
          defaultLanguage={undefined}
          value={activeFileTab?.value || '// Welcome to the playground'}
          options={{
            fontSize: 18,
            fontFamily: "monospace",
          }}
          onMount={handleEditorTheme}
        />
      )}
    </div>
  );
};
