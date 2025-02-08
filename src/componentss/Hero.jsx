import React from 'react'
import { NavLink } from 'react-router'

export const Hero = () => {
  return (
    <section>
        <div className='min-h-screen w-full flex flex-col  items-center justify-center bg-red-50'>
            <div className='p-10 bg-yellow-50 w-auto h-auto'>
                <div>
                    
                    <h1>
                        WILL  YOU BE MY VALENTINE 🌹
                    </h1>
                </div>
                <div className='flex items-center text-center gap-2 p-2 justify-center'>
                    <NavLink to='/yes' className='bg-green-400 rounded-xl p-5'>
                        yes
                    </NavLink>
                    <NavLink to='/no1' className='bg-red-400 p-2 rounded-sm'>
                        no
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

// export default Hero