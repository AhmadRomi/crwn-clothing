import {createSelector} from 'reselect';


const selectShopData=state=>state.shop;

const selectCollections=createSelector(
    [selectShopData],
    shop=>shop.collections
);

export const selectCollection=collectionId=>(
    createSelector(
        [selectCollections],
        collections=>collections[collectionId]
    )
);

export default selectCollections;