import React from 'react'
import {
  FaGithubSquare,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa'

export default function Footer() {

  return (
    <div className=''>
      <div className='flex justify-center items-center gap-16 my-10'>
        <a href='https://github.com/domx3'
        target="_blank" rel="noopener noreferrer">
          <FaGithubSquare size={30}/>
        </a>
        <FaEnvelope size={30}/>
        <FaInstagram size={30}/>
      </div>
    </div>
  )
}
