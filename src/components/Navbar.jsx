import React from 'react'
import logo from '/logo3.svg'

export default function Navbar({lookHome, setLookHome}) {

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] text-white px-4 mx-auto'>
      <div className='flex' onClick={()=>setLookHome(!lookHome)}>
        <img src={logo} className="ml-4 scale-150 mr-4 logo" alt="Logo" />
        <h1 className='text-xl italic font-bold uppercase'>Domx3D</h1>
      </div>
    </div>
  )
}