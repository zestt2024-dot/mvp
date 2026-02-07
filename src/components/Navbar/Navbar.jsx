import React, { useEffect, useState } from 'react'
import Style from'./Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { Facebook, Twitter } from 'lucide-react'

export default function Navbar() {
    const [count, setcount] = useState(0)
    useEffect(()=>{},[])
  return (
    <>
      <nav className='bg-sky-500 fixed top-0 left-0 right-0 z-50'>

      <div className="container mx-auto py-2 flex justify-between items-center">

          <div>
            
          <ul className='flex justify-around'>
            <li className='text-lg mx-4 text-slate-900 font-normal'><NavLink to={'/'}>Home</NavLink></li>
            <li className='text-lg mx-4 text-slate-900 font-normal'><NavLink to={'/about'}>About</NavLink></li>
            <li className='text-lg mx-4 text-slate-900 font-normal'><NavLink to={'/brands'}>Brands</NavLink></li>
            <li className='text-lg mx-4 text-slate-900 font-normal'><NavLink to={'/cart'}>Cart</NavLink></li>
            <li className='text-lg mx-4 text-slate-900 font-normal'><NavLink to={'/category'}>Category</NavLink></li>
          </ul>
        </div>


        <ul className='flex justify-around '>
            <li className='text-lg mx-4 text-slate-900 font-normal'><NavLink to={'/login'}>Login</NavLink></li>
            <li className='text-lg mx-4 text-slate-900 font-normal'><NavLink to={'/register'}>Register</NavLink></li>
            <li className='text-lg mx-4 text-slate-900 font-normal'><NavLink to={''}>Logout</NavLink></li>
                <li className='flex items-center mx-4'>
                  <Facebook size={20} color="#ffffff" strokeWidth={1.75} />
                  <Twitter size={20} color="#ffffff" strokeWidth={1.75} />
                </li>
        </ul>

      </div>

      </nav>
    </>
  )
}
