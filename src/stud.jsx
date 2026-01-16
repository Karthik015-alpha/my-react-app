import { useState } from "react";
import students from "./data/students.json"
function Stud() {
  /* const students = [
    { id: 1, name: "Santhi", course: "React", score: 95 },
    { id: 2, name: "Shabreen", course: "Python", score: 98 },
    { id: 3, name: "Sowmya", course: "JAVA", score: 92 },
    { id: 4, name: "Karthik", course: "Oracle", score: 92 }
  ];
  return(
    <div styke={{padding:"20px"}}>
      <h1>Student List</h1>
      {students.map(student=>{
        const bgColor=
           student.score>=90?"#237318":"#E63710";
           return(
            <div
            key={student.id}
            style={{
              backgroundColor:bgColor,
              border:"1px solid #ccc",
              padding:"10px",
              marginBottom:"10px",
              borderRadius:"6px"
            }}
            >
              <h2>Name:{student.name}</h2>
              <p>Course:{student.course}</p>
              <p>Score:{student.score}</p>
            </div>
           )
      })}
    </div>
  ) */
  // const [selectedStudent, setSelectedStudent] = useState(null);
  // const bgColors=[
  //   "#250989",
  //   "#4c042d",
  //   "#d80f0f",
  //   "#403b06"
  // ];
  // return (
    // <<div style={{ padding: "25px", textAlign: "center" }}>
    //   <h1>Student IDs</h1>
    //   {/* Centered ID list */}
    //   <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    //     {students.map((student) => (
    //       <div
    //         key={student.id}
    //         onClick={() => setSelectedStudent(student)}
    //         style={{
    //           cursor: "pointer",
    //           border: "2px solid #f5993c",
    //           padding: "8px",
    //           marginBottom: "6px",
    //           width: "120px"
    //         }}
    //       >
    //         ID: {student.id}
    //       </div>
    //     ))}
    //   </div>
    //   {/* Show details */}
    //   {selectedStudent && (
    //     <div
    //       style={{
    //         marginTop: "20px",
    //         border: "5px solid #f5993c",
    //         backgroundColor: "#2b3638",
    //         color: "white",
    //         padding: "10px",
    //         borderRadius: "5px",
    //         width: "300px",
    //         marginLeft: "auto",
    //         marginRight: "auto"
    //       }}
    //     >
    //       <h2>Name: {selectedStudent.name}</h2>
    //       <p>Course: {selectedStudent.course}</p>
    //       <p>Score: {selectedStudent.score}</p>
    //     </div>
    //   )}
    // </div>
  // );
  return(
    <div style={{padding:"20px"}}>
      <h1>student list</h1>
      {students.map((student,index)=>(
        <div
        key={student.id}
        style={{
          backgroundColor:["#250989",
    "#4c042d",
    "#d80f0f",
    "#403b06"][index%4],
          border:"1px solid #ccc",
          padding:"10px",
          marginBottom:"10px",
          borderRadius:"6px"
        }}
        >
          <h2>Name:{student.name}</h2>
          <p>Course:{student.course}</p>
          <p>Score:{student.score}</p>
        </div>
      ))}
    </div>
  );
  /*  return(
    <div style={{padding:"20px"}}>
      <h1>student list</h1>
      {students.map((student,index)=>(
        <div
        key={student.id}
        style={{
          backgroundColor:bgColors[index%bgColors.length],
          border:"1px solid #ccc",
          padding:"10px",
          marginBottom:"10px",
          borderRadius:"6px"
        }}
        >
          <h2>Name:{student.name}</h2>
          <p>Course:{student.course}</p>
          <p>Score:{student.score}</p>
        </div>
      ))}
    </div>
  ); */
}
export default Stud;