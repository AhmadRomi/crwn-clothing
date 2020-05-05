import { cartActionTypes } from "./cart.types";

export const addItemToCart=(cartItems, itemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===itemToAdd.id);
    if(existingCartItem){
        return cartItems.map(cartItem=>(
            cartItem.id===itemToAdd.id
            ?{...cartItem, quantity:cartItem.quantity+1}
            :cartItem
        )
        )
    }
    return [...cartItems,{...itemToAdd, quantity:1}]
}

export const removeItemFromCart=(cartItems,itemToRemove)=>(
    cartItems.filter(cartItem=>cartItem.id!==itemToRemove.id)
)

export const removeItemAtCheckout=(cartItems, itemToRemove)=>{
    const item=cartItems.find(item=>item.id===itemToRemove.id);
    if(item.quantity===1){
        return removeItemFromCart(cartItems, itemToRemove);
    }
    return cartItems.map(item=>(
        item.id===itemToRemove.id
        ?{...item, quantity:item.quantity-1}
        :item
    ))
}