import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="fixed bg-white w-full z-10">
        <nav className="border-b border-gray-200">
          <div className="h-[80px] flex justify-between">
            <div className='p-3 w-full h-full flex justify-between text-center'>
                    <div className='flex text-center h-full sm:pl-10 text-2xl max-sm:text-xl text-blue-600 font-extrabold'>
                        <Link href="/home" className='no-underline flex h-full text-center'>Empathy Link</Link>
                    </div>
                    <div className='h-full sm:text-lg max-sm:text-xs text-black'>
                        <div className='flex max-sm:gap-2 gap-20 sm:pr-10 text-center pr-14'>
                            <Link
                                href="/auth/Login"
                                className="text-gray-800 no-underline hover:underline hover:underline-offset-4 hover:text-blue-600">
                                Iniciar Sesión
                            </Link>
                            <Link
                                href="/home/Report"
                                className="text-gray-800 no-underline hover:underline hover:underline-offset-4 hover:text-blue-600">
                                Haz un reporte
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
        
  )
}

export default NavBar