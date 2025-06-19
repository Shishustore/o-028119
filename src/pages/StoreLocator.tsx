import React from 'react';
import Navbar from '@/components/Navbar';

const StoreLocatorPage = () => {
  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary-orange">Our Stores</h1>
            <p className="text-cool-black max-w-2xl mx-auto mt-2">
                Find a Shishu Poribohon store near you.
            </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Dhaka Flagship Store</h2>
            <p className="mb-2">Bashundhara City Shopping Complex</p>
            <p className="mb-2">Shop - 31, 32, 33, Level - 03, Block - D</p>
            <p>Phone: 012-3456-7890</p>
        </div>
      </main>
    </div>
  );
};

export default StoreLocatorPage;
