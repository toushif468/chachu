import React, {  useContext, useEffect, useState } from 'react';
import { ShopContext, ShopContextType } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Product from './Product';
import ProductItem from '../components/ProductItem';

const Collection: React.FC = () => {
  const context = useContext<ShopContextType | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { products } = context; 

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterProducts, setFilterProducts] = useState(products);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);

  const toggleCategory = (category: string) => {

    if (category.includes(category)) {
      setCategory(prev => prev.filter(item => item !== category));

    } else {
      setCategory(prev => [...prev, category]);
    }
  }
  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (subCategory.includes(value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setSubCategory(prev => prev.includes(value) ? prev : [...prev, value] );
    }
  }

  const applyFilters = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    } 
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);

  useEffect(() => {
    console.log(products);
  }, [])

  useEffect(() => {
    applyFilters();
  }, [category,subCategory,products])


}
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* FILTER SIDEBAR */}
      <div className="min-w-60">
        {/* FILTER HEADER */}
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform ${
              showFilter ? 'rotate-90' : ''
            }`}
            src={assets.dropdown_icon}
            alt="Toggle filters"
          />
        </p>

        {/* CATEGORY FILTER */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Men" />
              Men
            </label>

            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Women" />
              Women
            </label>

            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value="Kids" />
              Kids
            </label>
          </div>
        </div>

        {/* TYPE FILTER */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Topwear'} onChange={() => {toggleCategory('Topwear')}} />
              Topwear
            </label>

            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'} onChange={() => {toggleCategory('Bottomwear')}} />
              Bottomwear
            </label>

            <label className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'} onChange={() => {toggleCategory('Winterwear')}} />
              Winterwear
            </label>
          </div>
        </div>
      </div>
      {/* {Right side } */}
      <div className="flex-1">
        <div className="flex  justify-between text-base sm:text-2xl mb-4">
         <Title text1={'All '} text2={'COLLECTION'}/>
         {/* product Sort */}
         <select className='border-2 border-gray-300 text-sm px-2'>
          <option value="relavant">Sort by: Relevance</option>
          <option value="price_low_high">Price: Low to High</option>
          <option value="price_high_low">Price: High to Low</option>
         </select>
      </div>
          {/* Map Products */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
      </div>
      </div >
    </div>
  );
};

export default Collection;
