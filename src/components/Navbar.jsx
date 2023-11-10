import React, {useState} from 'react'

export default function Navbar({lookHome, setLookHome, mobile, frontPage, setMobile, setFrontPage}) {

  const [nav, setNav] = useState(false)
  
  const handleNav = () => {
    setNav(!nav)
  }

  const goHome =() => {
    handleNav()
    setFrontPage(true)

  }
  const goMobile =() => {
    handleNav()
    setFrontPage(false)
    setMobile(true)
  }
  const goDesktop =() => {
    handleNav()
    setFrontPage(false)
    setMobile(false)
  }

  return (
    <div>

      <div className='flex justify-between items-center h-24  max-w-[1240px] text-white px-4 mx-auto'>
        <div className='flex cursor-pointer z-10' onClick={()=>setLookHome(!lookHome)}>
          <img src='icons/logo3.svg' width='30px' className="scale-150 " alt="Logo" />
          {/* <h1 className='text-xl italic font-bold'></h1> */}
        </div>
        <div className='z-10 cursor-pointer hover:scale-110 duration-300 ease-linear' onClick={handleNav}>
          {nav ?
            <img src='icons/esc-w.svg' className='scale-150' alt="close" />
            :
            <img src='icons/burger-icon.svg' className='scale-150' alt="menu" />
          }
        </div>
      </div>
      <div className={
        nav ? 
        'fixed right-0 top-24 w-[60%] md:w-[30%] rounded-lg h-fit border-r-gray-100 bg-[#000300] text-white z-10 ease-in-out duration-500' 
        : 'fixed right-[-100%] z-10 ease-in-out duration-200'
      }>
        <ul className='p-4 uppercase'>
          <li className={frontPage ? 'p-4 border-b border-gray-600 flex cursor-pointer text-slate-500  ' :
          'p-4 border-b border-gray-600 flex cursor-pointer '}
            onClick={goHome}>
            Home
          </li>
          <li className={!frontPage && mobile ? 'p-4 border-b border-gray-600 flex cursor-pointer text-slate-500  ' :
          'p-4 border-b border-gray-600 flex cursor-pointer '}
            onClick={goMobile}>
            Mobile
          </li>
          <li className={!frontPage && !mobile ? 'p-4 border-b border-gray-600 flex cursor-pointer text-slate-500  ' :
          'p-4 border-b border-gray-600 flex cursor-pointer '}
            onClick={goDesktop}>
            Desktop
          </li>
        </ul>
      </div>
    </div>
  )
}