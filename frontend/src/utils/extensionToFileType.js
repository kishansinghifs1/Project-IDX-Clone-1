const extensionToFileTypeMap={
    js: 'javascript',
    jsx: 'javascript',
    ts: 'typescript',
    tsx: 'typescript',
    py: 'python',
    java: 'java',
    css: 'css',
    html: 'html',
    json: 'json',
    md: 'markdown',

}
export const extensionToFileType=(extension)=>{
    if(!extension)
        return undefined;
    console.log(extensionToFileTypeMap[extension]);
    return extensionToFileTypeMap[extension];
}