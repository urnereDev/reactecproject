import React, { useContext, useEffect, useState } from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'
import Home from '../page/Home';

function Header() {
  const [isActive,setIsActive] = useState(false);
  const {isOpen,setIsOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })
  return (
    <header className={`${isActive ? 'bg-white shadow-md' : 'bg-none'} fixed w-full z-10 transition-all`}>
      <div className='flex container mx-auto items-center justify-between h-full'>
        <Link to={'/'}>
          <div >
            <img className='w-[40px]' src={Logo} alt="" />
          </div>
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
          <FiShoppingBag className='text-2xl' />
         <div className='bg-red-600 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>

      </div>
    </header>
  )
}

export default Header