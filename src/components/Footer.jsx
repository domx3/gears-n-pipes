import React from 'react'
import {
  FaGithubSquare,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa'
import { TitleSvg } from './FrontSvg'

export default function Footer() {

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center gap-8 mt-16 mb-20'>
        <p className='text-slate-300'>Created by</p>
        <TitleSvg />
        <a href='https://github.com/domx3'
        target="_blank" rel="noopener noreferrer">
          <FaGithubSquare size={30}/>
        </a>
        
      </div>
    </div>
  )
}
