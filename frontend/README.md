# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
------Project IDX-Clone-------
1.npm i antd
2.npm install @ant-design/icons@5.x --save
3.npm i axios
4.npm i zustand
5.npm i react-router-dom
6.npm i react-icons
---------Backend------
npm i -D nodemon
npm i cookie-parser
 npm install dotenv
 npm i express
 npm i cors
  npm i @tanstack/react-query
 --------------
 components(atoms,molecules,organism)Atomic designs
 data “segregate”:(NETWORK CALLING)
 queries=>to read the data
 mutation=>to modify the data
 Caching=>key value pair form
 diff btw stale time: data is how much fresh
  nd cache time:how long data should be kept in the cache before it be garbage collect
  ___________________________
  vertical Scaling: icrease capacity of one server too much
  horizontal Scaling: same capacity bring  more than 1 server
  nested projects-complex binary blocks(raw exact data)
  these horizontal server consist in Centralized storage (AWS s3)
  ------------------
  client -->click button on {create project}----->LOAD BALANCER----->{S1,S2,S3}----->(AWS s3)
  ________________________
  client send requesr to server
       |
    Execute vite command
       |
       apne server ki HDD mai ek unique  project ID ke sth create kre 
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
__________________________
when we click on button it trigger
handleCreateProject-->trigger api call in backend
we use here {react-query}
1.query-->only for read
2.mutation--->for modification
_______________________
handleCreateProject---->createProjectMutation---->useCreateProjec(custom hook)---->createProjectApi(api call which we can modify too)---->     
 const response = await axios.post('/api/v1/projects');
__________________________________
Single Responsibility Principle (SRP)

this means every piece of your application should focus on doing one specific thing well

Open/Closed Principle (OCP)

A software module (class, function, component, service, etc.) should be open for extension but closed for modification.
-----------------------------------
always use in web development {must}
___________________________________________
import Editor from '@monaco-editor/react'; provide editor
------------------------------------------
create a store {zustand} activeFiletabstore
---->three parameter path, value,extension
----------------------------------
queryClient.fetchQuery
const queryClient = new QueryClient();
-------------------------------------------------
That’s what QueryClient does.

First time: it fetches the API.

Next time: it gives the cached data instantly.

If data is old, it can refresh in the background.
--------------------------------------------------
1. we constructed basic API getProjectTree --->await axios.get(`/api/v1/projects/${projectId}/tree`);
2. we constructed store-->treeStructure
--------------------------------------------
setter and getter in project id from zustand store(get,set)
---------------------------
data consist of{path,name,children(if consist then folder if not then file)}
-----------------------------------------
file and folder are in form of n- array tree
using it as recursive approch (recursive work)-----> have three parts
1.self work
2.recursuve assumption
3.base case
useState is used to track which folders are expanded or collapsed[visibility].
-----------------------------------------------------------------
...visibility → copy all existing folder states (so nothing else changes).

[name]: !visibility[name] → flip the visibility of the clicked folder only.

Example: Clicking "components":

// Before click
visibility = { "src": true, "components": false }

// After click
visibility = { "src": true, "components": true }


✅ Only the clicked folder changes; all others stay the same.
----------------------------------------------------------------------------
Mutable approach: you erase “components: closed” and write “components: open” on the same page.

Problem: someone else looking at the page may not notice the change immediately.

Immutable approach: you take a new page, copy everything, and then change “components: open” on the new page.

React sees a new page → knows something changed → updates the UI.
[keep it in mind]
-------------------------------------------------------------------------------
how to design a nested folder structure in java script