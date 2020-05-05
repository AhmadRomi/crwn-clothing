import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import './checkout.scss';

const CheckoutPage=({items, total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            items.map(cartItem=><CheckoutItem key={cartItem.id} item={cartItem}/>)
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps=createStructuredSelector({
    items:selectCartItems,
    total:selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
