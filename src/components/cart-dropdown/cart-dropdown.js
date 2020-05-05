import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors';
import './cart-dropdown.scss';

const CartDropdown=({items})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                items.map(item=><CartItem key={item.id} item={item}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps=state=>({
    items:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);