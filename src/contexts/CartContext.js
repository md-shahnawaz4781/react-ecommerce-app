import React, { createContext, useEffect, useState } from 'react';


export const CartContext = createContext()
const CartProvider = ({children}) => {

  const[cart, setCart ] = useState([])
  const[itemAmount, setItemAmount] =  useState(0)
  const[total, setTotal] = useState(0)

  useEffect(()=>{
    const total = cart.reduce((accumulator, currentItem)=>{
      return accumulator + currentItem.price * currentItem.amount
    }, 0);
    setTotal(total)
  })

 //add to cart
  const addToCart = (id, product)=>{
    const newItem = {...product, amount: 1}
    //check if the item already in the cart

    const cartItem = cart.find((item)=>{
      return item.id ===id;
    })

    //if cart item is already in the cart
    if(cartItem){
      const newCart = [...cart].map((item)=>{
        if(item.id === id){
          return{...item, amount: cartItem.amount + 1}
        }else{
          return item;
        }
      })
      setCart(newCart)
    }else{
      setCart([...cart,newItem])
    }
  }
  //remove to cart

  const removeFromCart = (id, product)=>{
      const newCart = cart.filter(item =>{
        return item.id != id;
      })
      setCart(newCart)
  }
  //clear cart
  const clearCart = ()=>{
    setCart([])
  }
  //increase amount
  const increaseAmonut = (id) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return {...item, amount: item.amount + 1}; // Increment the amount
      } else {
        return item;
      }
    });
    setCart(newCart);
  };
  //decrease amount
  const decreaseAmount = (id)=>{
    const cartItem = cart.find((item)=> {
      return item.id === id;
    })
    if(cartItem){
      const newCart = cart.map(item =>{
        if(item.id=== id){
          return {...item, amount: cartItem.amount - 1}
        }else{
          return item
        }
      })
      setCart(newCart)
    }else{
      if(cartItem.amount<2){
        removeFromCart(id)
      }
    }
    if(cartItem.amount <2){
      removeFromCart(id)
    }
  }

  return <CartContext.Provider  value={{addToCart, cart , removeFromCart , clearCart, increaseAmonut, decreaseAmount , itemAmount, total}}>{children}</CartContext.Provider>;
};

export default CartProvider;
