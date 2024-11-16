import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
  return (
      <div className="flex flex-col sm:flex-row border border-gray-400">
        {/* Hero left side */}
        <div className="w-full flex items-center justify-center">
            <div className="text-[#414141] text-center sm:text-left">
                {/* Image below the text */}
                <img src={assets.hero} alt="Latest Models" className='w-full h-2/3' />
            </div>
        </div>
        {/* Hero right side */}
      </div>
  )
}

export default Hero
