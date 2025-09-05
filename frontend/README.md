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
______________