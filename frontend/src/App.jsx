import './App.css'
import { Routes,Route } from 'react-router-dom'
//import { io } from 'socket.io-client';
import { CreateProject } from './pages/CreateProject';
import { ProjectPlayground } from './pages/ProjectPlayground';

function App() {
//const socket=io('http://localhost:5000');
return (
  <Routes>
    <Route path="/" element={<CreateProject/>}/>
    <Route path='/project/:projectId' element={<ProjectPlayground/>} />
   
  </Routes>
)
}


export default App

