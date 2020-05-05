import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import CustomButton from '../custom-button/custom-button';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item';
import {selectCartItems, selectCartItemsCount} from '../../redux/cart/cart.selectors';
import './cart-dropdown.scss';

const CartDropdown=({items, history, dispatch})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                items.length?items.map(item=><CartItem key={item.id} item={item}/>)
                :<span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps=state=>createStructuredSelector({
    items:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));