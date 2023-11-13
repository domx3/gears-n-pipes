import React, { useEffect } from 'react'
import { ComputerSvg, PhoneSvg } from './FrontSvg'
import QuickList from './QuickList'

export default function FrontOptions({ pages, lookHome, showDesktop, showMobile, qlist, setQlist }) {

  useEffect(() => {
    window.scroll({top: 0,left: 0, behavior: 'smooth'})
  }, [lookHome])

  return (
    <div className=''>
      
      <div className='w-full minh flex p-8 justify-center items-center phone-gears cursor-pointer bg-slate-400' 
        onClick={showMobile}
      >
        <PhoneSvg 
          className='hover:scale-125 ease-in-out duration-500 '
        />
        <div className='block ml-[10%]'>
          <h1 className='font-bold text-3xl mb-4 text-slate-100'>Mobile</h1>
          <p className='text-xl font-light text-slate-200'>
            A lighter version with portrait orientation.
          </p>
        </div>
      </div>

      <div className=' w-full minh p-8 flex justify-center items-center desktop-gears cursor-pointer bg-slate-500' 
        onClick={showDesktop}
      >
        <div className='block mr-[10%]'>
          <h1 className='font-bold text-3xl mb-4 text-slate-100'>Desktop</h1>
          <p className='text-xl font-light text-slate-200'>
            A more refined version with landscape orientation.
          </p>
        </div>
        <ComputerSvg 
          className='hover:scale-125 ease-in-out duration-500 '
        />

      </div>


      <div className='w-full minh list-rotate cursor-pointer p-8 flex flex-col justify-start items-center bg-slate-300'
        id='qlist' 
        onClick={()=> setQlist(!qlist)}
      >
        <h1 className='font-bold text-3xl mt-8 text-slate-700 opacity-20 hover:opacity-50'>
          Show quick list
        </h1>
        
        { !qlist ?
        
        <img src='front/list.svg' alt='list'
          className='mt-16 scale-150 hover:scale-125 ease-in-out duration-500'/>
          :
          <QuickList
            pages={pages}
          />
          
      }
      </div>
      
    </div>
  )
}
