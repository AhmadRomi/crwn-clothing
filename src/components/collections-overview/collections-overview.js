import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import selectCollections from '../../redux/shop/shop.selectors';
import CollectionPreview from '../Collection-Preview/collection-preview';

import './collections-overview.scss';

const CollectionsOverview=({collections})=>{
    const values=Object.values(collections);
    return(
        <div className="collections-overview">
            {
                values.map(col=><CollectionPreview key={col.id} {...col}/>)
            }
            
        </div>
    );
}
const mapStateToProps=state=>createStructuredSelector({
    collections:selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);




