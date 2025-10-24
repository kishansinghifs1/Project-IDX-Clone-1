import fs from "fs/promises";

export const handleEditorSocket = (socket,editorNamespace) => {
  socket.on("writeFile", async ({ data, pathToFileOrFolder }) => {
    try {
      const response = await fs.writeFile(pathToFileOrFolder, data);
      editorNamespace.emit("writeFileResponse", {
        data: "file written successfully",
        path: pathToFileOrFolder,
      });
    } catch (error) {
      console.log("Error writing file", error);
      socket.emit("error", {
        data: "Error writing file",
      });
    }
  });
  socket.on("createFile", async ({ pathToFileOrFolder }) => {
    const isFileAlreadyPresent = await fs.exists(pathToFileOrFolder);
    if (isFileAlreadyPresent) {
      socket.emit("error", {
        data: "File already present",
      });
      return;
    }
    try {
      const response = await fs.writeFile(pathToFileOrFolder, "");
      socket.emit("createFileResponse", {
        data: "File created successfully",
      });
    } catch (error) {
      console.log("Error creating file", error);
      socket.emit("error", {
        data: "Error creating file",
      });
    }
  });
  socket.on("readFile", async ({ pathToFileOrFolder }) => {
    try {
      const response = await fs.readFile(pathToFileOrFolder,"utf-8");
      console.log(response);
      socket.emit("readFileSuccess", {
        value: response,
        path:pathToFileOrFolder,
      });
    } catch (error) {
      console.log("Error reading file", error);
      socket.emit("error", {
        data: "Error reading file",
      });
    }
  });
  socket.on("deleteFile", async ({ pathToFileOrFolder }) => {
    try {
      const response = await fs.unlink(pathToFileOrFolder);
      socket.emit("deleteFileSuccess", {
        data: "File deleted successfully",
        path: pathToFileOrFolder,
      });
    } catch (error) {
      console.log("Error deleting file", error);
      socket.emit("error", {
        data: "Error deleting file",
      });
    }
  });
  socket.on("createFolder", async ({ pathToFileOrFolder }) => {
    try {
      const response = await fs.mkdir(pathToFileOrFolder);
      socket.emit("createFolderResponse", {
        data: "Folder created successfully",
      });
    } catch (error) {
      console.log("Error creating folder", error);
      socket.emit("error", {
        data: "Error creating folder",
      });
    }
  });
  socket.on("deleteFolder", async ({ pathToFileOrFolder })=>{
    try {
        const response = await fs.rmdir(pathToFileOrFolder, { recursive: true });
        socket.emit("deleteFolderSuccess", {
           path: pathToFileOrFolder,
            data: "Folder deleted successfully",
            });
        } catch (error) {
        console.log("Error deleting folder", error);
        socket.emit("error", {
            data: "Error deleting folder",
            });

  }
});
};
