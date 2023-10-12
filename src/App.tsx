// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='rounded overflow-hidden shadow-lg bg-white w-full'>
      <div className="x-6 y-9">
        <div className="bg-cover y-auto p-96 w-auto bg-[url('/src/assets/images/001fgo.jpg')]"></div>

      </div>
      <h1 className='text-3xl font-bold underline'>
        FGO Personality Test
      </h1>
      {/* <div className='box- h-25 w-20 p-4 border-4'>

      </div> */}
      <button className='bg-blue-500' onClick={() => console.log("clicked")}>Button</button>
    </div>
  )
}

export default App
