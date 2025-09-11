import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"
import { useNavigate } from "react-router-dom";
export  const CreateProject =()=>{
    const { createProjectMutation}=useCreateProject()
    const navigate=useNavigate();
    
    async function handleCreateProject(){
        console.log("Going to trigger the api");
        try{
             const response=await createProjectMutation();
            console.log("Now we should redirect to the editor");
             navigate(`/project/${response.data}`); 
        }catch(error){
            console.log("Error creating project",error);
        }
    }
    return(
        <div>
        <h1>Create Project</h1>
        <button onClick={handleCreateProject}>Create Project</button>
        </div>
    )
}