import {useState} from "react";
function String(){
    const[name,setName]=useState("ADMIN");
    const changename=()=>{
        setName("SANKALPAI LABS");
    };
    return(
        <div>
            <h2>Current Name:{name}</h2>
            <button onClick={changename}>
                Change Name
            </button>
        </div>
    );
}
export default String;