import { useEffect,useState } from "react";
import UserProfile from "./UserProfile";
function APIError3(){
    const[user,setuser]=useState(null);
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState("");
    useEffect(()=>{
        async function Fetchuser(){
            try{
                setloading(true);
                seterror("");
                const response=await fetch("https://jsonplaceholder.typicode.com/users/1");
                const data=await response.json();
                if(response.status===404){
                    throw new Error("No records found");
                }
                setuser(data);
                if(!response.ok){
                    throw new Error("Failed to fetch user data");
                }
            }catch(err){
                seterror(err.message);
            }finally{
                setloading(false);
            }
        }
        Fetchuser();
    },[]);
        return(
            <div style={{padding:"20px"}}>
                <h1>User Dashboard</h1>
                <UserProfile
                user={user}
                loading={loading}
                error={error}
                />
            </div>
        )
}
export default APIError3;