import {useState} from "react";
function Counter(){
    const [count,setCount]=useState(0);
    const Count=()=>{
        setCount(count+1)
    }
    return(
        <button onClick={Count}>
            Count :{count}
        </button>
    );
}
export default Counter;