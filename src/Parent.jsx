import {createContext} from "react";
import Child from './Child.jsx';
import Child2 from './Child2.jsx';
import Child3 from './Child3.jsx';
import {useState} from "react";
export const AppContext=createContext();
export const NameContext=createContext();

const data={
        name:"Karthik",
        age:20,
        score:86
    };
function Parent(){
const[name,setname]=useState("Hello");
return(
    <>
    <NameContext.Provider value={{name,setname}}>
        <Child3 />
    </NameContext.Provider>
    <AppContext.Provider value={data}>
        <Child2 />
    </AppContext.Provider>
    </>
);
}

export default Parent;