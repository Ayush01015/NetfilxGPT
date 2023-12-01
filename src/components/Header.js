import React from 'react'

const Header = () => {
  return (
    <nav className='bg-blue-600 text-white p-8 w-full'>
      <ul className='flex w-1/3 space-x-8 text-xl font-bold cursor-pointer'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </nav>
  )
}

export default Header
