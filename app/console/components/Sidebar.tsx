"use client"

import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { GoReport } from 'react-icons/go'
import { BiLogOutCircle } from 'react-icons/bi'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="h-full w-28 max-lg:hidden">
      <div className='bg-white h-28'>

      </div>
      <div className=' mx-4 border border-gray-300'/>
      <div className='flex justify-center bg-white h-20 w-full text-2xl'>
        <div className='flex items-center h-24'>
          <Link href="/console" className='text-center w-full text-gray-400 hover:text-gray-800 text-xs mt-2'><AiOutlineHome className='w-full text-3xl hover:text-gray-800 text-gray-400'/>Inicio</Link>
        </div>
      </div>
      <div className='flex justify-center bg-white h-20 w-full text-2xl'>
        <div className='flex items-center h-24'>
          <Link href="/console/Report" className='text-center w-full text-gray-400 hover:text-gray-800 text-xs mt-2'><GoReport className='w-full text-3xl hover:text-gray-800 text-gray-400'/>Reportes</Link>
        </div>
      </div>
      <div className='flex justify-center bg-white h-20 w-full text-2xl'>
        <div className='flex items-center h-24'>
          <Link href="/auth/Login" className='text-center w-full text-gray-400 hover:text-red-600 text-xs mt-2'><BiLogOutCircle className='w-full text-3xl hover:text-red-600 text-gray-400'/>Salir</Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar