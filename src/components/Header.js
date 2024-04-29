import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link, useSearchParams } from "react-router-dom";
import Logo from '../img/logo.svg'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [isActive , setIsActive] = useState(false);


  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY >10 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className= {`${isActive ? 'bg-white py-2 shadow-md' : 'bg-none py-2'} fixed w-full z-10 transition-all h-[62px]`}>
      <div className="flex container mx-auto items-center justify-between h-full"> 

      
      <Link to={'/'}>
        <div>
          <img className="w-[40px]" src={Logo} alt="" />
        </div>
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="responsive text-2xl mr-2 gap-4 md:mr-10 m" />
          <div className=" absolute top-full left-0 text-xs text-red-600 ruby ml-[-58px] select-none mt-1" style={{display: 'ruby'}}>Press here to view your items</div>
      </div>
      </div>
    </header>
  );
};


export default Header;
