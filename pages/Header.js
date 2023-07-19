import React from 'react'

import Link from 'next/link'

function Header() {
  return (
    <>
    <div className='bg-white '>
    <main className='mx-32'>

    <nav className='py-5 px-20 flex justify-between'>
    <Link href='/' className='
        text-white px-36 py-2 rounded-md ml-8
        bg-gradient-to-r from-blue-600 to-blue-700 tracking-wider opacity-90
        border-2 border-white
        hover:border-gray-500 hover:opacity-100 hover:border-2 hover:font-semibold
        '>
          home
        </Link>
    <ul className='flex items-center justify-center'>


      <li>
      <Link href='About' className='
        text-white px-10 py-2 rounded-md ml-8
        bg-gradient-to-r from-orange-600 to-orange-700 border-2 border-white tracking-wider opacity-80
        hover:border-gray-600  hover:opacity-100 hover:border-2  
        '>
          about
        </Link>
      </li>

      <li>
        <Link 
        href='Projects' className='
        text-white px-8 py-2 rounded-md ml-8 border-2 border-white
        bg-gradient-to-r from-yellow-500 to-yellow-400 tracking-wider opacity-80
        hover:border-gray-500 hover:opacity-100  
        '>
          projects
        </Link>
      </li>

      <li>
        <Link 
        href='JacobCho_CV.pdf' 
        target='_blank'
        className='
        text-white px-8 py-2 rounded-md ml-8 border-2 border-white
        bg-gradient-to-r from-cyan-500 to-teal-400 tracking-wider opacity-90
        hover:border-gray-500 hover:opacity-100 hover:border-2  
        '>
          resume
        </Link>
      </li>


    </ul>
    </nav>

    </main>
    </div>
  </>

  )
}

export default Header