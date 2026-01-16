import {useState} from "react";
import './dashboard.css';
function Calculator(){
    const[n1,setn1]=useState("");
    const[n2,setn2]=useState("");
    const[op,setop]=useState("");
    const num1=Number(n1||0);
    const num2=Number(n2||0);
    let result=0;
    if(op==="+") result=num1+num2;
    else if(op==="-") result=num1-num2;
    else if(op==="*") result=num1*num2;
    else if(op==="/") result=num2===0 ? "Cannot divide by 0" : num1/num2;
    return(
        <div className="calculator-box">
            <input
            type="number"
            placeholder="Enter first number"
            value={n1}
            onChange={(e)=>setn1(e.target.value)}
            />
            <select value={op} onChange={(e)=>setop(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
            type="number"
            placeholder="Enter second number"
            value={n2}
            onChange={(e)=>setn2(e.target.value)}
            />
            <p>Result:{result}</p>
        </div>
    )
}
export default Calculator;