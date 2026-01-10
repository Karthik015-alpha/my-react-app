import { useContext } from "react";
import {AppContext} from './Parent';
function Child2(){
    const info=useContext(AppContext);
    return(
        <div>
            <p>Name:{info.name}</p>
            <p>Age:{info.age}</p>
            <p>Score:{info.score}</p>
        </div>
    );
}
export default Child2;