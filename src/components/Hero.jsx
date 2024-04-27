import React from 'react'
import HeroImg from '../img/shopping.svg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='bg-green-200 h-[700px] bg-hero bg-no-repeat bg-fill bg-center'>
        <div className="container mx-auto flex flex-col justify-around h-full">
            <div className='flex flex-col justify-center font-semibold'>
                <div className='pt-[40px] flex items-center uppercase'>
                    <div className='w-10 h-[2px] bg-green-600 mr-3'></div>
                    New Product</div>
                <h1 className='text-[70px] leading-[1.1] font-light '>AUTUMN SALE <br />
                    <span className='font-semibold'>
                        INCREDIBLE DİSCOUNT
                    </span>
                </h1>
                <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
            </div>
            <div className=' items-center justify-center hidden lg:block'>
                <img className='' src={HeroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero