import uuid4 from 'uuid4';
import fs from 'fs/promises';
import { execPromisified } from "../utils/execUtility.js";
import {REACT_PROJECT_COMMAND} from '../config/serverConfig.js'
import directoryTree from 'directory-tree';
import path from "path";

export const createProjectService = async ()=>{
    //Create a unique id and then inside the projects folder create a new folder with that id
  const projectId =uuid4();
  console.log("New project id is",projectId);
  await fs.mkdir(`./projects/${projectId}`);
  //After this call the npm create vite command in the newly created  project folder
  const response =await execPromisified(REACT_PROJECT_COMMAND,{
      cwd:`./projects/${projectId}`
  })  
  return projectId;
}
export const getProjectTreeService=async (projectId)=>{
    const projectpath =path.resolve(`./projects/${projectId}`);//will return end to end path
    const tree=directoryTree(projectpath);
    return tree;
}