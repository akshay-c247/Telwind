import React from 'react'

const Home = () => {
  return (
    <div>
        <div>
        <nav  className=' bg-green-400  text-white flex justify-between'>
        <img src="https://www.chapter247.com/wp-content/uploads/2020/04/last-updated-sticky-logo.png" className='h-16 px-3 my-3' alt="" />
        <ul className='flex px-40 my-4 py-6  text-xl font-serif space-x-11 justify-end'>
            <li className='mx-2 cursor-pointer hover:text-green-300'><a href="/">Home</a></li>
            <li className='mx-2 cursor-pointer hover:text-green-300'><a href="/services">Services</a></li>
            <li className='mx-2 cursor-pointer hover:text-green-300'><a href="/login">Login</a></li>
            <li className='mx-2 cursor-pointer hover:text-green-300'><a href="/about">About-Us</a></li>
            <li className='bg-green-700 hover:bg-green-300 mx-2 cursor-pointer'>Contact-Us</li>
        </ul>
        </nav>
        <main>
       <div className="main  bg-green-400 h-64 py-40">
       <p className='text-white font-serif font-bold text-5xl'>We Create Software For Digital Economy</p>
       <p className='font-bold text-xl py-3'> Web. Mobile. AI. IoT. Cloud</p>
       <img className='px-56 ' src="https://www.chapter247.com/wp-content/uploads/2019/05/banner-image-green.png" alt="" />
       <h1 className='text-3xl font-serif py-3'>WHAT WE OFFER</h1>
       
       </div>
      </main>
    </div>
  </div>
  )
}

export default Home;