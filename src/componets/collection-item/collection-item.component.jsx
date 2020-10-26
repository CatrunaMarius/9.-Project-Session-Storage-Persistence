import React from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss'

const CollectionsItem = ({item, addItem }) => {
    const {  name, price, imageUrl } = item;
    return(
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
        <spam className='name'>{name}</spam>
        <span className='price'>{price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted> Add to cart </CustomButton>
    </div>
)}

// creare mapDispatch
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionsItem);