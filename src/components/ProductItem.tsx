import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { ShopContextType } from '../context/ShopContext';
import { Link } from 'react-router-dom';

interface ProductItemProps {
  id: string | number;
  image: string[];
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  image,
  name,
  price,
}) => {
  const context = useContext<ShopContextType | null>(ShopContext);

  if (!context) {
    return null;
  }

  const { currency } = context;

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden rounded-lg group">
        <img
          src={image[0]}
          alt={name}
          className="hover:scale-110 transition ease-in-out"
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
