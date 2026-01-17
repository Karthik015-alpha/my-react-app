import React from "react";
import "../dashboard.css";
export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <ul className="sidebar-menu">
        <li
          className={`sidebar-item ${
            activePage === "course" ? "active" : ""
          }`}
          onClick={() => setActivePage("course")}
        >
          Course
        </li>

        <li
          className={`sidebar-item ${
            activePage === "parent" ? "active" : ""
          }`}
          onClick={() => setActivePage("parent")}
        >
          NameChange
        </li>

        <li
          className={`sidebar-item ${
            activePage === "page" ? "active" : ""
          }`}
          onClick={() => setActivePage("page")}
        >
         Page
        </li>

        <li
          className={`sidebar-item ${
            activePage === "calculator" ? "active" : ""
          }`}
          onClick={() => setActivePage("calculator")}
        >
          Calculator
        </li>
      </ul>

    </aside>
  );
} 
// 2
// import React from "react";
// import "../dashboard.css";
// import { useEffect,useState } from "react";
// function Sidebar() {
//   const[error,seterror]=useState("[]");
//   const[state,setstate]=useState();
//   useEffect(()=>{
//     async function loadData(){
//       try{
//         const res=await fetch("/menu.json");
//         if(!res.ok){
//           throw new Error("failed to load json");
//         }
//       }
//     }
//   })
//   return (
//     <aside className="sidebar">
//       <h2 className="sidebar-title">Dashboard</h2>
//     </aside>
//   );
// }

