import {useQuery} from "@tanstack/react-query"
import { getprojectTree } from "../../../apis/projects"

export const useProjectTree =(projectId)=>{
    const{isLoading,isError,data:projectTree, error} = useQuery({
        queryFn:()=>getprojectTree({projectId}),

    });
    return{
    isLoading,
    isError,
    projectTree,
    error
    };
}