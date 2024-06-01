import { useState } from 'react'
import './App.css'
import { BsPlus } from "react-icons/bs";
import { IoIosRemove } from "react-icons/io";

function App() {

const [data , setData] = useState(0)

const handelAdd = ()=>{
  setData(data + 1)
}
const handelRemove = ()=>{
  setData(data - 1)
}

  return (
    <>
  <div className="flex gap-10">
    <button onClick={handelRemove} className='p-4 border-2 solid border-red rounded-sm hover:bg-red-400 transition-all'><IoIosRemove /></button>
  <h1 className='text-2xl font-bold text-black'>{data}</h1>
  <button onClick={handelAdd} className='p-4 border-2 solid border-red rounded-sm hover:bg-green-400 transition-all'><BsPlus /></button>

  </div>
    </>
  )
}

export default App
