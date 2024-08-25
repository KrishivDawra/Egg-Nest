import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between '>

      <div className='flex '>
        <img className='h-[40px] w-[40px]' src=".\src\assets\logo.jpg" alt="" />
        <h1 className='px-2 py-2 size- font-serif text-red-300'>EggNest</h1>
      </div>
            
      <ul className=' flex gap-5 px-6 py-3 border-2 bg-gray-50 rounded-2xl'>
        <li>Home</li>
        <li>AbOut Us</li>
        <li>Services</li>
        <li>Products</li>
      </ul>
      
      <div className='gap-10'>
        <a href="#" className='px-2'>Sign In</a>
        <button className='bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full'>Join Us</button>
      </div>
    </div>
  )
}

export default Header
