import React,{useState,useEffect} from "react";
import NavBar from "./Components/navBar";
import UserForm from "./Components/userForm";
function App() {
  const[count,setCount]=useState(0);
  useEffect(()=>{
    document.title=count + "hits on button";
  })
  return (
    <div>
        <NavBar/>
        <h1 className='text-2xl font-bold  text-[#00df9a]'>Custom Hooks</h1>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
     
       <UserForm/>
    </div>
  );
}

export default App;
