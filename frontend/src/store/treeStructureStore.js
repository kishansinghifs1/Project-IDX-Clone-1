import { QueryClient } from '@tanstack/react-query';
import { create } from 'zustand';
import { getprojectTree } from '../apis/projects';

export const useTreeStructureStore = create((set,get)=>{
    
   const queryCleint = new QueryClient()
return {
    projectId:null,
    treeStructure:null,
    setTreeStructure:async()=>{
        const id=get().projectId;
        const data=await queryCleint.fetchQuery({
            queryKey:[`projecttree-${id}`],
            queryFn:()=>getprojectTree({projectId:id}),
        });
        console.log(data);
        set({
            treeStructure:data
        })
    },
    setProjectId:(projectId)=>{
        set({
            projectId:projectId
        });
    }
}

})