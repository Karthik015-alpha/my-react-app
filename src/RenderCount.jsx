import {useRef,useState} from "react";
function RenderCount(){
    const countref=useRef(0);
    const [count,setcount]=useState(0);
    countref.current+=1;
    return(
        <div>
            <p>Component rendered:{countref.current} times</p>
            <button onClick={()=>setcount(count+1)}>Re-render</button>
        </div>
    )
}
export default RenderCount;