import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { IoMdArrowForward } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem'

import { BsFillTrash2Fill } from 'react-icons/bs';

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart, total} = useContext(CartContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}>
      <div className='flex items-center justify-center py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag(0)</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[450px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item)=>{
          return <CartItem item={item} key={item.id}/>
        })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className='flex w-full justify-between items-center'>
            <div className='uppercase font-semibold'>
              <span className='mr-2'>Total:</span>${parseFloat(total).toFixed(2)}
            </div>
            <div className='cursor-pointer py-4 bg-red-700 text-white w-12 h-12 flex justify-center items-center text-xl' onClick={clearCart}>
              <BsFillTrash2Fill/>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Sidebar