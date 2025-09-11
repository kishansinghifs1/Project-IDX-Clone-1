______________BACKEND____________________________
npm i -D nodemon
npm i cookie-parser
npm install dotenv
npm i express
npm i cors
npm i @tanstack/react-query
_______________________________________________
Exec function(take a comman dand execute for u)
exec → runs a command in a shell and buffers output.

spawn → streams real-time output, useful for long logs.

fork → runs another Node.js script with message passing.
__________________________
What is child_process? → Node’s way to run system commands/programs.

Why did you need it? → To programmatically run vite@latest and other CLI tools.

What role did it play? → It acted like the bridge between Node.js and the system terminal.
_________________________________
*UUID{Universally Unique Identifier}128-bit number  (Uniquely identifies objects in Computer System)
npm i uuid4
______________
as exec is CALLBACK function but for better approach we using "promis" method 
we are using
const execPromisified=util.promisify(child_process.exec);
this promisified function comes from util module(internal node.js module)
__________________________________________________
path--> nested folder and  file structure---> genterate in tree form
{recursive function/DFS}
function getPaths(node, path = "", result = []) {
  const currentPath = path ? `${path}/${node.name}` : node.name;

  if (!node.children || node.children.length === 0) {
    result.push(currentPath); // file
  } else {
    for (let child of node.children) {
      getPaths(child, currentPath, result);
    }
  }
  return result;
}

console.log(getPaths(fileSystem));
------------------------------------
this is code but we have module for this 
npm i directory-tree
import directoryTree from 'directory-tree';
import path from "path";
