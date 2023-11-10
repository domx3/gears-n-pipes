import React from 'react'
import {motion} from 'framer-motion'
import { pageLinks } from '../Data'

export default function QuickList() {

  const pages = pageLinks.slice(2,pageLinks.length)

  return (
    <div className='mx-auto mt-16 text-center overflow-x-hidden'> 
      <div className='flex items-center flex-col'>
        {pages.map((page, i) =>  (
            <motion.div
              key={page.name}
              animate={i%2===0 ? {x:[2000,0]} : {x:[-2000,0]}}
              transition={{type:'spring', bounce:0.1, duration:1, delay:i*0.5}}
              className='m-2 flex hover:scale-110'
            >
              <a className="text-xl text-slate-400 font-semibold mr-2 hover:text-slate-100" 
                
                href={page.link}
                target="_blank" rel="noopener noreferrer"
                
              >{page.name} </a>
              <img width='16px' src='icons/link.svg' alt='link'/>
            </motion.div>
        ))}
      </div>
    </div>
  )
}
