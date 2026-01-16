import { useEffect,useState } from "react";
function StudentAPI(){
    const[student,setstudent]=useState([]);
    useEffect(()=>{
        fetch("/student.json")
        .then((response)=>response.json())
        .then((data)=>setstudent(data))
        .then((error)=>console.error("Error loading JSON:",error));
    },[]);
    return(
        <div style={{padding:"20px"}}>
            <h1>Student List</h1>
            {student.map((students,index)=>(
        <div
        key={students.id}
        style={{
          backgroundColor:["#250989",
    "#4c042d",
    "#d80f0f",
    "#403b06"][index%4],
        //   border:"1px solid #ccc",
          padding:"10px",
          marginBottom:"10px",
          borderRadius:"6px"
        }}
        >
          <h2>Name:{students.name}</h2>
          <p>Course:{students.course}</p>
          <p>Score:{students.score}</p>
        </div>
      ))}
    </div>
    );
}
function StudentOnline(){
    const[students,setstudents]=useState([]);
    const[loading,setloading]=useState(true);
    const[error,seterror]=useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
           .then ((response) => {
           if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response. json();
        })
        .then ((data) => {
            setstudents(data);
            setloading(false);
        })
        .catch((err) => {
           seterror(err.message);
           setloading(false);
        });
}, []);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

return (
  <div style={{ padding: "20px" }}>
    <h1>Online Student Data</h1>

    {students.map((student, index) => (
      <div
        key={student.id}
        style={{
          backgroundColor: [
            "#0790ec",
            "#d20f7e",
            "#0fe7f3",
            "#f8e40e"
          ][index % 4],
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px"
        }}
      >
        <h2>{student.name}</h2>
        <p>Email: {student.email}</p>
      </div>
    ))}
  </div>
);
}
export default StudentAPI;
export {StudentOnline};