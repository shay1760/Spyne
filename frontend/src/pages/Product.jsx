import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CarContext } from '../context/CarContext';
import { assets } from '../assets/assets';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(CarContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [model, setModel] = useState('base'); // Default to 'base' model
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({
    name: '',
    description: '',
    image: '',
  });

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setEditFields({
        name: foundProduct.name,
        description: foundProduct.description,
        image: foundProduct.image[0], // Assume the first image as the primary one
      });
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Default image
      setModel('base'); // Default model
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    const updatedProduct = {
      name: editFields.name,
      description: editFields.description,
      image: [editFields.image], // Wrap in array as the backend expects an array
    };

    await updateProduct(productId, updatedProduct); // API call to update the product
    setIsEditing(false);
    fetchProductData(); // Refresh the data
  };

  const modelToIndex = {
    base: 0,
    mid: 1,
    high: 2,
  };

  // Get the selected price based on the model
  const selectedPrice = productData ? productData.price[modelToIndex[model]] : null;
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} alt="" key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="" className='w-99 h-100'/>
          </div>
        </div>
        {/* Product info */}
        <div className='flex-1'>
          <h1 className='font-md text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star} alt="" className='w-3 5' />
            <img src={assets.star} alt="" className='w-3 5' />
            <img src={assets.star} alt="" className='w-3 5' />
            <img src={assets.star} alt="" className='w-3 5' />
            <img src={assets.star} alt="" className='w-3 5' />
          </div>
          {/* Displaying the price based on the selected model */}
          <p className='mt-5 text-3xl font-medium'>{currency}{selectedPrice}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Models</p>
            <div className='flex gap-3'>
              {productData.models.map((item, index) => (
                <button 
                  onClick={() => setModel(item)} 
                  className={`border py-2 px-4 bg-gray-200 ${item === model ? 'border-yellow-500' : ''}`} 
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <h2 className='mt-8 sm:w-4/5'></h2>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% original product</p>
            <p>Cash on delivery available</p>
            <p>7 days return and exchange policy</p>
          </div>
        </div>
      </div>
      {/* Description & review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>This product is made from at least 50% sustainable materials...</p>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
};

export default Product;
