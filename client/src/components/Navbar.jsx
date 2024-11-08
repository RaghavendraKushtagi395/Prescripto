import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();

  const[showMenu,setShowMenu] = useState(false);
  const [token,setToken]= useState(true);

  return (
    <div>
      <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt='' />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
          <NavLink to='/'>
            <li className='py-1 hover:text-green-600 cursor-pointer'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>

          <NavLink to='/doctors'>
            <li className='py-1 hover:text-green-600 cursor-pointer'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>

          <NavLink to='/about'>
            <li className='py-1 hover:text-green-600 cursor-pointer'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>

          <NavLink to='/contact'>
            <li className='py-1 hover:text-green-600 cursor-pointer'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>
          {
           token 
           ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-10 rounded-full' src={assets.profile_pic} alt='profile picture'></img>
                <img className='w-2.5' src={assets.dropdown_icon} alt=''></img>

                <div className='absolute top-0 right-0 p-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
                  <div className='min-w-48 bg-stone-100 flex flex-col gap-4 p-4 rounded-lg'>

                    <p onClick={()=>navigate('/profile')} className='hover:text-black cursor-pointer'>My Profile</p>

                    <p onClick={()=>navigate('/myappointments')} className='hover:text-green-600 cursor-pointer'>My Appointments</p>

                    <p onClick={()=>setToken(false)} className='hover:text-red-500 cursor-pointer'>Logout</p>
                  </div>
                </div>

           </div>
           : <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
          }
          
        </div>
      </div>
      
    </div>
  )
}
