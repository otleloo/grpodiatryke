import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}
interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}
export const ProductCard = ({
  product,
  onAddToCart
}: ProductCardProps) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };
  return <motion.div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100" whileHover={{
    y: -5
  }} transition={{
    type: 'spring',
    stiffness: 300
  }}>
      <div className="h-48 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-sky-600 bg-sky-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            Ksh {product.price.toLocaleString()}
          </span>
          <Button variant="primary" size="sm" onClick={handleAddToCart} className="flex items-center gap-1">
            <ShoppingCart size={16} />
            Add
          </Button>
        </div>
      </div>
    </motion.div>;
};