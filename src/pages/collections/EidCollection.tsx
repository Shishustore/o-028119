import React from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';

const EidCollectionPage = () => {
  // Example: Filter for products tagged for Eid
  const eidProducts = productsData.filter(p => p.category === 'Baby');

  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
            <img src="/banners/eid-banner.png" alt="Eid Collection 2025" className="w-full rounded-lg shadow-md mb-4"/>
            <h1 className="text-5xl font-bold text-primary-orange">Eid Collection 2025</h1>
            <p className="text-cool-black max-w-2xl mx-auto mt-2">
                Celebrate in style with our exclusive Eid collection for your little stars.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eidProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.variants[0].price}
              image={product.thumbnail}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default EidCollectionPage;
