import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome.jsx'
import Greet from './Greet.jsx'
import Image from './Image.jsx'
import Table from './table.jsx'
import Page from './page.jsx'
import Opt from './opy.jsx'
import Welcome2 from './Wel2.jsx'
import Greeting ,{Greeting1,Student} from './Greeting.jsx'
import Welcome3 from './Component.jsx'
import AddNums from './Component2.jsx'
import CourseApp from './Course.jsx'
import Parent from './Parent.jsx'
import Dashboard from './COMPONENTS/DashBoardMain'
import Stud from './stud'
import StudentAPI ,{StudentOnline} from './StudentAPI'
import RuntimeErrorExample from './errorhandle.jsx'
import ApiErrorExample from './apierror.jsx'
import ApiErrorExample2 from './apierror2.jsx'
import App2 from './App2.jsx'
function App() {
  const [count, setCount] = useState(0)
  const names = ["Phaneendra", "Kishore", "Suresh"];

  return (
    <>
      <div>
        {/* <RuntimeErrorExample /> */}
        {/* <ApiErrorExample /> */}
        {/* <ApiErrorExample2 /> */}
        <App2 />
        {/* <Stud /> */}
        {/* <StudentAPI /> */}
        {/* <StudentOnline /> */}
        {/* <div className="header">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo left" alt="Vite logo"  />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo right react" alt="React logo" />
        </a>
        </div>
        <Image />
            <Opt />
             <Table />*/}
      </div> 
      {/* {names.map(name => (
           <h2>{name}</h2>
        ))} */}
        {/* {names.map((name,index)=>(
          <h2 key={index}>{name}</h2>
        ))} */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <Page />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Welcome />
      <Welcome2 />
      <Welcome3 />
      <Greet />
      <Greeting name="Karthik" />
      <Greeting1 name="Karthik" />
      <Student name='kiran' course='React' />
      <AddNums n1="30" n2="90" />
      <WelcomeComponent name="Karthik" city="Nellore" />
      <Welcome firstname="Karthik" lastname="Dasari" />
      <Greet time="morning" name="Karthik" />
      <Stud name="Kiran" course="MPC" m1={80} m2={75} m3={90} />
      <Product name="IQOO 15" brand="VIVO" price={60000} />
      <Employee name="Ajay" dept="Backend" salary={60000} />
      <String />
      <Counter />
      <Calculator />
      <Exp />*/}
      {/* <CourseApp /> */}
      {/* <Parent /> */}
      {/* <Dashboard /> */}
      
    </>
  )
}

export default App
