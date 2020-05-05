import React from 'react';
import {connect} from 'react-redux';
import {removeItem, addItem, removeItemAtCheckout} from '../../redux/cart/cart.actions';
import './checkout-item.scss';

const CheckoutItem=({item, dispatch})=>{
    const {name, imageUrl, price, quantity}=item;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow"  onClick={()=>dispatch(removeItemAtCheckout(item))}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow"  onClick={()=>dispatch(addItem(item))}>&#10095;</div>
            </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={()=>dispatch(removeItem(item))}>&#10005;</div>
    </div>
)};

export default connect(null)(CheckoutItem);