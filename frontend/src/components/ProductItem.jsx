import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CarContext } from '../context/carContext'

const ProductItem = ({ name, id, price, image }) => {
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
    <div className='product-item'>
      <img src={image[0]} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      {/* Add any other product details here */}
    </div>
    </Link>
  );
};

export default ProductItem;


