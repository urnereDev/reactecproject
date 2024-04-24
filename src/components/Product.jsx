import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {BsPlus, BsEyeFill} from 'react-icons/bs'

function Product({product}) {
    

    const {id, category, image, price, name} = product;
    console.log(image)
    console.log(id)
    console.log(category)
    console.log(price)
    console.log(name)
  return (
    <div>
        <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
            <div>
                {/* image */}
                <div>
                    <img src="image" alt="" />
                </div>
            </div>
        </div>
        <div>2</div>
    </div>
  )
}

export default Product