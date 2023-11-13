import React, { useEffect, useState } from 'react'

function VisitModal({ pages, setVisitOn, iCard, setToast }) {

  const [showLinks, setShowLinks] = useState(false)
  //const showLinks = (iCard > 0 && iCard < jsonData.pages.length-1)

  useEffect(() => {
    setShowLinks(iCard > 0 && iCard < pages.length-1)
  }, [iCard])

  const copyLink = () => {
    navigator.clipboard.writeText(pages[iCard].link)
    setToast('Link copied to clipboard!')
  }

  return (
    <>
    {showLinks ?
    <div className='w-[320px] md:w-[390px] h-[270px] flex flex-col items-center justify-between bg-slate-800 rounded-md'>
      <span className='flex justify-center'>
        <h2 className='text-white font-light mt-16 text-2xl mx-4'>Redirecting to <span className='font-medium'>{pages[iCard].name}</span> app. Enjoy your visit!</h2>
        <div className='fixed right-2 top-2 cursor-pointer hover:scale-110 duration-300' 
          onClick={() => setVisitOn(false)}>
          <img src="icons/esc-b.svg" className='scale-150 m-2' alt="esc" />  
        </div>
      </span>
      <div className='flex justify-between mb-8'>
        <div className=' rounded-lg bg-amber-700 text-lg p-2 mr-12 cursor-pointer shadow-lg hover:scale-105 duration-300'
          onClick={copyLink}>
          Copy link
        </div>
        <a className='border-2  rounded-lg bg-amber-600 p-2 text-lg shadow-lg hover:scale-105 duration-300' 
          href={pages[iCard].link} 
          target={iCard === 1 ? "_self" :"_blank" }
          rel="noopener noreferrer">
          Go to app
        </a>
      </div>
    </div>
    :
    <div className='w-[280px] h-[180px] flex flex-col items-center justify-between bg-slate-800 rounded-md'>
      <h2 className='text-white font-light mt-16 text-2xl mx-4'>There are no links for this page.</h2>
      <div className='fixed right-2 top-2 cursor-pointer' onClick={() => setVisitOn(false)}>
          <img src="icons/esc-b.svg" className='scale-150 m-2' alt="esc" />  
        </div>
    </div>
    }

    </>
  )
}

export default VisitModal