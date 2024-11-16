import React from 'react'
import {NavLink} from 'react-router-dom'
import {assets} from '../assets/assets'

const Add = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink className='flex items-center gap-3 border border-gray-300 w-[10%] border px-3 py-2 rounded-1' to='/add'>
            <img className='w-5 h-5' src={assets.add} alt="" />
            <p className='hidden md:block'>Add Items</p> 
        </NavLink>
      </div>
    </div>
  )
}

export default Add
