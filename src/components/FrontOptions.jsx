import React, { useEffect } from 'react'
import { ComputerSvg, PhoneSvg } from './FrontSvg'

export default function FrontOptions({ lookHome, showDesktop, showMobile}) {

  useEffect(() => {
    window.scroll({top: 0,left: 0, behavior: 'smooth'})
  }, [lookHome])

  return (
    <div className=''>
      
      <div className='w-full minh flex p-8 justify-center items-center phone-gears cursor-pointer bg-slate-400 flex-wrap' 
        onClick={showMobile}
      > 
        <div className='block ml-[10%]'>
          <h1 className='font-bold text-3xl mb-4 text-slate-100'>Mobile</h1>
          <p className='text-xl font-light text-slate-200'>
            A lighter version with portrait orientation.
          </p>
        </div>
        <PhoneSvg 
          className='hover:scale-125 ease-in-out duration-500 '
        />
      </div>

      <div className=' w-full minh p-8 flex justify-center items-center desktop-gears cursor-pointer bg-slate-500 flex-wrap' 
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
    </div>
  )
}
