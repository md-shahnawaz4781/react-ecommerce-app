import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const {removeFromCart ,increaseAmonut, decreaseAmount} = useContext(CartContext)
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img src={item.image} alt="" className="max-w-[80px]"/>
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">{title}</Link>
            <div className="text-xl cursor-pointer" onClick={()=>removeFromCart(id)}>
              <IoMdClose className="text-gray-500 hover:text-red-500 transition duration-200"/>
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div className="flex-1 flex justify-center items-center cursor-pointer" onClick={()=> decreaseAmount(id)}>
              <IoMdRemove/>
              </div>
              <div className="h-full flex justify-center items-center px-2 ">{amount}</div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer" onClick={()=>increaseAmonut(id)}>
                <IoMdAdd/>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">${price}</div>
            <div className="flex-1 flex justify-end items-center text-primary">{`$ ${parseFloat(price*amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
