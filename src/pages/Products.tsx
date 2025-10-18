import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { ProductCard, Product } from '../components/products/ProductCard';
import { Button } from '../components/ui/Button';
import { ShoppingCart, Filter, Search } from 'lucide-react';
export const ProductsPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const products: Product[] = [{
    id: '1',
    name: 'Orthotic Insoles',
    description: 'Custom orthotic insoles for everyday comfort and support. Ideal for flat feet and plantar fasciitis.',
    price: 3500,
    image: "/logo.webp",
    category: 'Orthotics'
  }, {
    id: '2',
    name: 'Foot Massage Roller',
    description: 'Relieve foot pain and tension with this ergonomic massage roller. Great for recovery after long days.',
    price: 1200,
    image: "/logo.webp",
    category: 'Recovery'
  }, {
    id: '3',
    name: 'Diabetic Socks (3 Pack)',
    description: 'Non-binding socks designed specifically for diabetic patients. Seamless design prevents irritation.',
    price: 1800,
    image: "/logo.webp",
    category: 'Diabetic Care'
  }, {
    id: '4',
    name: 'Heel Pain Relief Kit',
    description: 'Complete kit for heel pain management including night splint, heel cups, and massage ball.',
    price: 4500,
    image: "/logo.webp",
    category: 'Pain Relief'
  }, {
    id: '5',
    name: 'Bunion Corrector',
    description: 'Adjustable bunion splint that helps to realign the toe and reduce bunion pain during daily activities.',
    price: 2200,
    image: "/logo.webp",
    category: 'Pain Relief'
  }, {
    id: '6',
    name: 'Compression Socks',
    description: 'Medical-grade compression socks to improve circulation and reduce swelling. Perfect for travel and long periods of standing.',
    price: 1500,
    image: "/logo.webp",
    category: 'Compression'
  }, {
    id: '7',
    name: 'Foot Cream',
    description: 'Therapeutic foot cream with urea and essential oils to hydrate dry, cracked skin and soften calluses.',
    price: 950,
    image: "/logo.webp",
    category: 'Skin Care'
  }, {
    id: '8',
    name: 'Toe Separators',
    description: 'Silicone toe separators for alignment and relief from overlapping toes, bunions, and hammer toes.',
    price: 800,
    image: "/logo.webp",
    category: 'Alignment'
  }];
  const categories = Array.from(new Set(products.map(product => product.category)));
  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    // In a real application, you would likely have more sophisticated cart management
    alert(`${product.name} added to cart!`);
  };
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  return <div>
      {/* Hero Section */}
      <section className="bg-sky-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Podiatry Products
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Quality products to support your foot health at home
          </p>
        </div>
      </section>
      <Section background="white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-auto order-2 md:order-1">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setSelectedCategory(null)} className={`px-4 py-2 rounded-full text-sm font-medium ${!selectedCategory ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                All
              </button>
              {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-sky-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                  {category}
                </button>)}
            </div>
          </div>
          <div className="relative w-full md:w-64 order-1 md:order-2">
            <input type="text" placeholder="Search products..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        {filteredProducts.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />)}
          </div> : <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No products found matching your criteria.
            </p>
            <Button className="mt-4" onClick={() => {
          setSearchTerm('');
          setSelectedCategory(null);
        }}>
              Reset Filters
            </Button>
          </div>}
        {cart.length > 0 && <div className="fixed bottom-6 right-6">
            <Button className="flex items-center gap-2 shadow-lg">
              <ShoppingCart size={20} />
              <span>Cart ({cart.length})</span>
            </Button>
          </div>}
      </Section>
      <Section background="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Shop with GR Podiatry?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Podiatrist-Approved
              </h3>
              <p className="text-gray-600">
                All our products are selected and approved by our team of
                podiatrists for maximum effectiveness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                Shop with confidence using our secure payment methods, including
                M-Pesa and major credit cards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Enjoy fast and reliable delivery services throughout Nairobi and
                surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>;
};