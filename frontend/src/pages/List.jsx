import React, { useContext, useEffect, useState } from 'react';
import { CarContext } from '../context/carContext';
import ProductItem from '../components/ProductItem';

const List = () => {
  const { products, search, showSearch } = useContext(CarContext);
  const [filterProducts, setFilterProducts] = useState([]);

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) => {
        const priceMatch = item.price.some((price) => price.toString().includes(search));

        return (
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.subCategory.toLowerCase().includes(search.toLowerCase()) ||
          priceMatch
        );
      });
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [search, showSearch, products]);

  return (
    <div className='flex flex-col gap-1 pt-10 border-t'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6'>
        {filterProducts.map((item, index) => {
          const basePrice = item.price[0]; // Assuming the first price is the base price
          return (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={`Starting from ₹${basePrice}`}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
