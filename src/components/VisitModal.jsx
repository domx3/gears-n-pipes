import React from 'react'
import { pageLinks } from './Data'

function VisitModal({ setVisitOn, iCard, setToast }) {

  const showLinks = (iCard > 0 && iCard !== pageLinks.length-1)
  
  const copyLink = () => {
    navigator.clipboard.writeText(pageLinks[iCard].link)
    setToast('Link copied to clipboard!')
  }

  return (
    <>
    {showLinks ?
    <div className='w-[260px] h-[180px] flex flex-col items-center justify-between bg-slate-800 rounded-md'>
      <span className='flex justify-center'>
        <h2 className='text-white font-light mt-8 text-md mx-4'>Redirecting to <span className='font-medium'>{pageLinks[iCard].name}</span> app. Enjoy your visit!</h2>
        <div className='fixed right-2 top-2 cursor-pointer hover:scale-105 duration-300' 
          onClick={() => setVisitOn(false)}>
          <img src="esc.svg" alt="esc" />  
        </div>
      </span>
      <div className='flex justify-between'>
        <div className=' rounded-lg bg-amber-700 text-sm p-2 m-4 mb-6 cursor-pointer shadow-lg hover:scale-105 duration-300'
          onClick={copyLink}>
          Copy link
        </div>
        <a className='border-2  rounded-lg bg-amber-600 p-2 text-sm m-4 mb-6 shadow-lg hover:scale-105 duration-300' 
          href={pageLinks[iCard].link} target="_blank" rel="noopener noreferrer">
          Go to app
        </a>
      </div>
    </div>
    :
    <div className='w-[150px] h-[90px] flex flex-col items-center justify-between bg-slate-800 rounded-md'>
      <h2 className='text-white font-light mt-8 text-md mx-4'>There are no links for this page.</h2>
      <div className='fixed right-2 top-2 cursor-pointer' onClick={() => setVisitOn(false)}>
          <img src="esc.svg" alt="esc" />  
        </div>
    </div>
    }

    </>
  )
}

export default VisitModal