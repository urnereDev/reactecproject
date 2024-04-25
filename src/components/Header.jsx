import React, { useContext } from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import { SidebarContext } from '../contexts/SidebarContext'

function Header() {
  const {isOpen,setIsOpen} = useContext(SidebarContext)
  return (
    <header className='bg-green-300'>
      <div>
        Header
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <FiShoppingBag className='text-2xl' />
      </div>
    </header>
  )
}

export default Header