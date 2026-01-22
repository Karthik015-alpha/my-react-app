import { useRef } from "react";
function FocusInput(){
    const inputref=useRef(null);
    const focusInput=()=>{
        inputref.current.focus();
    };
    return(
        <div>
            <input ref={inputref} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}
export default FocusInput;