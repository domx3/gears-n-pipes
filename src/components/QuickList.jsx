import React from 'react'
import {motion} from 'framer-motion'

export default function QuickList({pages}) {

  const pages2 = pages.slice(1, pages.length-1)

  return (
    <div className='mx-auto mt-16 text-center overflow-x-hidden'> 
      <div className='flex items-center flex-col'>
        {pages2.map((page, i) =>  (
            <motion.div
              key={page.name}
              animate={i%2===0 ? {x:[2000,0]} : {x:[-2000,0]}}
              transition={{type:'spring', bounce:0.1, duration:1, delay:i*0.5}}
              className='m-2 flex hover:scale-110'
            >
              <a className="text-xl text-slate-400 font-semibold mr-2 hover:text-slate-100" 
                
                href={page.link}
                target={i===0 ? "_self" : "_blank" }
                rel="noopener noreferrer"
                
              >{page.name} </a>
              <img width='16px' src='icons/link.svg' alt='link'/>
            </motion.div>
        ))}
      </div>
    </div>
  )
}
