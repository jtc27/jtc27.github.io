import Head from 'next/head'

import React from 'react'
import {
  AiFillLinkedin,
  AiFillGithub
} from 'react-icons/ai'

import {
  BsPersonVcardFill
} from 'react-icons/bs'

import Image from 'next/image'
import profile from '../public/profile.jpg'

export default function Index() {
  return (
  <div className='bg-white'>
    <Head>
      <title>Jacob Cho Portfolio</title>
      <meta />
      <link rel="stylesheet" href="" />
    </Head>

    <main className='mx-32'>
      <section className='min-h-screen px-20'>

        <div className='grid grid-rows-8 grid-flow-col gap-4 text-center p-5 '>
          <div class="row-span-5 ... py-9"><Image src={profile}  /></div>
            <div class="col-span-2 ...">
              <p className='text-2xl text-teal-700 font-medium justify-center'>Jacob Cho</p> 
              <p className='text-xl text-gray-500 font-medium justify-center'>Software Developer</p>
            </div>
            <div class="row-span-1 col-span-2 ...">

            </div>
            <div class="row-span-1 col-span-2 ...">

              <p className='text-lg leading-8 text-blue-800'>
                Hi there!  I'm Jacob, a software developer.  I have experience with:
              </p>
              <p className='text-md leading-8 text-gray-800'>
                JavaScript (React, Node.js, Express, MongoDB, Jest), Typescript
              </p>
              <p className='text-md leading-8 text-gray-800'>
                Ruby (Rails, Sinatra, RSpec, Capybara)
              </p>
              <p className='text-md leading-8 text-gray-800'>
                 SQL (PostgreSQL, TablePlus) and Database management
              </p>
              <p className='text-md leading-8 text-gray-800'>
                  HTML, CSS (Bootstrap), Tailwind, DaisyUI
              </p>
              <p className='text-md leading-8 text-gray-800'>
                  Heroku, Git, Firebase, Vercel, Netlify, Twilio
              </p>

            </div>

            <div class="row-span-1 col-span-2 ...">

              <p className='text-md leading-2 text-orange-700'>
                Links to my social sites are below.  Thank you for visiting 😊
              </p>
           
            </div>
          </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500
        '>
        <a target="_blank"
        href='https://github.com/jtc27' 
        className='px-2 py-2 border-2 border-white  hover:text-black hover:rounded hover:border-2 hover:border-gray-400'
        >
          <AiFillGithub />
        </a>
        <a target="_blank"
        href='https://www.linkedin.com/in/jtc27' 
        className='px-2 py-2 border-2  border-white  hover:text-blue-500 hover:rounded hover:border-2 hover:border-gray-400'
        >
          <AiFillLinkedin />
        </a>

        <a target="_blank"
        href='JacobCho_CV.pdf' 
        className='px-2 py-2 border-2  border-white  hover:text-orange-500 hover:rounded hover:border-2 hover:border-gray-400'
        > 
          <BsPersonVcardFill/>
        </a>
        </div>

      </section>

    </main>

    
  </div>
  )
}
