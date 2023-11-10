import React from 'react'
import { ComputerSvg, ListSvg, PhoneSvg } from './FrontSvg'
import QuickList from './QuickList'

export default function FrontOptions({showDesktop, showMobile, qlist, setQlist }) {
  return (
    <div className=''>
      
      <div className='w-full flex p-8 justify-center items-center phone-gears cursor-pointer bg-slate-400' 
        onClick={showMobile}
      >
        <PhoneSvg 
          className='hover:scale-125 ease-in-out duration-500 '
        />
        <div className='block ml-[10%]'>
          <h1 className='font-bold text-3xl mb-4 text-slate-100'>Mobile</h1>
          <p className='text-xl font-light text-slate-200'>
            A lighter version for mobile devices.
          </p>
        </div>
      </div>

      <div className=' w-full p-8 flex justify-center items-center desktop-gears cursor-pointer bg-slate-500' 
        onClick={showDesktop}
      >
        <div className='block mr-[10%]'>
          <h1 className='font-bold text-3xl mb-4 text-slate-100'>Desktop</h1>
          <p className='text-xl font-light text-slate-200'>
            A heavier version for more performant devices.
          </p>
        </div>
        <ComputerSvg 
          className='hover:scale-125 ease-in-out duration-500 '
        />

      </div>


      <div className='w-full minh list-rotate cursor-pointer p-8 flex flex-col justify-start items-center bg-slate-300' 
        onClick={()=> setQlist(!qlist)}
      >
        <h1 className='font-bold text-3xl mt-8 text-slate-700 opacity-20 hover:opacity-50'>
          Show quick list
        </h1>
        
        { !qlist ?
        
          
          <ListSvg 
            className='mt-16 scale-150 hover:scale-125 ease-in-out duration-500'
          />
          :
          <QuickList />
      }
      </div>
      
    </div>
  )
}
