import {createSelector} from 'reselect';

const selectCart=state=>state.cart;

export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.items
);

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    items=>items.reduce((acc, item)=>acc+item.quantity, 0)
);

export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)

export const selectCartTotal=createSelector(
    [selectCartItems],
    items=>items.reduce((acc, item)=>acc+item.price*item.quantity, 0)
)