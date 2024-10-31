'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}]);
    settitle("")
    setdesc("")
    console.log(mainTask);
  }
  let renderTask = <h1>No Task Available</h1>
  const deleteHnadler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  if(mainTask.length>0){
    renderTask = mainTask.map((t, i)=>{
      return(
        <li className='flex items-center justify-between p-2 m-4 border-2 border-red-400'>
          <div key={i} className='flex items-center justify-between  w-2/3 border-2'>
            <h4 className='text-xl font-semibold'>{t.title}</h4>
            <h6 className='text-lg text-gray-500 font-medium'>{t.desc}</h6>
          </div>
          <button onClick={()=>{
            deleteHnadler(i)
          }} className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </li>
      );
    });
  }
  return (
    <div>
        <>
          <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My ToDoList</h1>
          <form onSubmit={submitHandler}>
            <input className='text-2xl border-4 border-zinc-800 m-5 px-4 py-2' placeholder='Enter title here' value={title} onChange={(e)=>{
              settitle(e.target.value)
            }}></input>
            <input className='text-2xl border-4 border-zinc-800 m-5 px-4 py-2' placeholder='Enter description here' value={desc} onChange={(e)=>{
              setdesc(e.target.value)
            }}></input>
            <button className='bg-black text-white px-4 py-3 m-5 text-2xl font-bold rounded'>Add task</button>
          </form>
          <hr />
          <div className='p-8 bg-slate-200'>
            <ul>
              {renderTask}
            </ul>
          </div>
          <div className='flex justify-end items-center pr-40 py-5 mt-20 bg-red-400 fixed w-full bottom-0'>
            <button className='px-4 py-2 bg-red-800 hover:scale-110 hover:ease-in-out shadow-lg border-0 hover:rounded-2xl font-bold text-2xl text-white'>Saqlain Asif</button>
          </div>
        </>
    </div>
  )
}

export default page