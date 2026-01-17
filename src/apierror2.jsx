import { useEffect, useState } from "react";
import './App.css'
/* // 1 */
function ApiErrorExample2() {
  const [error, setError] = useState("");
  const[students,setstudents]=useState([]);
  const[loading,setloading]=useState(true);
  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        setstudents(await response.json());
      } catch (err) {
        setError(err.message);
      } finally{
        setloading(false);
      }
    }
    loadData();
  }, []);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
  return (
    <div style={{padding:"20px"}}>
      <h2>API / Async Error</h2>
      {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      <div className="divclass">
        {students.map((student, index) => {
        if(student.id<11){
            return(
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
                 <p>User Name:{student.username}</p>
                </div>
             );
        }
        return null;
       })}
      </div>
    </div>
  );
}
export default ApiErrorExample2;
// import {useEffect,useState} from "react";

// function ApiErrorExample2() {
//     const [students,setStudents]=useState([]);
//     const [loading,setloading]=useState(true);
//     const [error,setError]=useState(null);

//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response)=>{
//             if(!response.ok){
//                 throw new Error("Network issue");
//             }
//             return response.json();
//         })
//         .then((data)=>{
//             setStudents(data);
//             setloading(false);
//         })
//         .catch((error)=>{
//             setError(error.message);
//             setloading(false);
//         });
//     },[]);

//     if (loading) return <div>loading........</div>;
//     if (error) return <div>Error: {error}</div>;

//     return  (
//         <div style={{padding:"20px"}}>
//             <h1>Online Student Data</h1>

//             <div
//             style={{
//                 height:"300px",
//                 overflowY:"auto",
//                 border:"1px solid #ccc",
//                 padding:"10px",
//             }}
//             >
//                 {students.map((student,index)=>(
//                     <div
//                     key={student.id}
//                     style={{
//                         padding:"10px",
//                         marginBottom:"10px",
//                         borderRadius:"5px",
//                     }}
//                     >
//                         <h2>{student.name}</h2>
//                         <div>Email: {student.email}</div>
//                         </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
// export default ApiErrorExample2;
