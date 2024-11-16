import React from 'react'
import {assets} from '../assets/assets.js'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
      <Link to='/'><img src={assets.logo} alt="" className='w-36 h-30 py-2' /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/list' className="flex flex-col items-center gap-1">
            <p>List</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/add' className="flex flex-col items-center gap-1">
            <p>Add</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search} className='w-5 cursor-pointer' />
        <div className='group relative'>
          <Link to='/login'><img src={assets.user} className='w-5 cursor-pointer' alt="" /></Link>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer hober:text-black'>Profile</p>
            <p className='cursor-pointer hober:text-black'>Logout</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
