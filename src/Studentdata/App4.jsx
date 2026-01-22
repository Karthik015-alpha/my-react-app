import { useEffect,useState } from "react";
import ErrorBoundary from "./ErrorBoundary1";
import Sidebar1 from "./sidebar1";
import Content from "./Contentmain3";
import Studlist from "./Studentlist";
import '../stud.css';
function App3() {
    const[activepage,setactivepage]=useState("add");
    const[students,setstudents]=useState([]);
    useEffect(() => {
    fetch("/student.json")
      .then((res) => res.json())
      .then((data) => setstudents(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
  return (
    <div classNmae="app-container">
      <ErrorBoundary>
        <Sidebar1 setActivePage={setactivepage} />
      </ErrorBoundary>
      <div classNmae="main-content">
      <Studlist students={students} />
      <Content activepage={activepage} />
    </div></div>
  );
}
export default App4;
