import {useState} from "react";
function Exp(){
    /* const[num,setnum]=useState("");
    const num1=Number(num||0);
    let result="";
    let fc=0;
    let f=1;
    while(f<=num1){
        if(num1%f==0){
            fc=fc+1;
        }
        f=f+1;
    }
    if(fc==2) result="Prime";
    if(fc>2) result="Not Prime";
    return(
        <div>
            <input
            type="number"
            placeholder="Enter first number"
            value={num}
            onChange={(e)=>setnum(e.target.value)}/>
            <p>Result:{result}</p>
        </div>
    )  */
   /* const[num,setnum]=useState();
   const num1=Number(num||0);
   let fact=1;
   let result=0;
   if(num1>0){
    for(let i=1;i<=num1;i++){
        fact=fact*i;
    }
    result=fact;
   }
   return(
    <div>
        <input
        type="number"
        placeholder="Enter Number"
        value={num}
        onChange={(e)=>setnum(e.target.value)}/>
        <p>result:{result}</p>
    </div>
   ); */
   const[num,setnum]=useState();
   const[result,setresult]=useState(0);
   const Countdigit=()=>{
     let num1=Number(num||0);
     let dc=0;
     while(num1>0){
         dc=dc+1;
         num1=Math.floor(num1/10);
       }
      setresult(dc);
    };
   return(
    <div>
        <input
        type="number"
        placeholder="Enter Number"
        value={num}
        onChange={(e)=>setnum(e.target.value)}/><button onClick={Countdigit}>Click</button>
        <p>result:{result}</p>
    </div>
   )
}
export default Exp;