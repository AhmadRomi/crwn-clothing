import React from 'react';
import './Shop.scss';
import CollectionPreview from '../../components/Collection-Preview/collection-preview';
import SHOP_DATA from './Shop.data';

class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        return(
            <div>
                {this.state.collections.map(col=>{
                    return(
                        <CollectionPreview key={col.id} {...col}/>
                    );
                })}
            </div>
        );
    }
}

export default Shop;