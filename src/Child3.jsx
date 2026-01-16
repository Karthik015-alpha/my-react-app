import {useContext} from "react";

import {NameContext} from './Parent.jsx';
function Child3(){
    /* const [name,setName]=useState(useContext(NameContext)); */
    const{name,setname}=useContext(NameContext);
    /* const[sname,setName]=useState("{name}"); */
    /* const changename=()=>{
        setname("SANKALPAILABS");
    }; */
    return(
        <div>
            <h2>Current Name:{name}</h2>
            <button onClick={()=>setname("SANKALPAILABS")}>
                Change Name
            </button>
        </div>
    );
}
export default Child3;