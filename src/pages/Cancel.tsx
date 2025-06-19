import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

const CancelPage = () => {
  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-lg shadow-sm">
          <Info className="mx-auto h-16 w-16 text-blue-500 mb-4" />
          <h1 className="text-3xl font-bold text-primary-orange mb-4">Order Cancelled</h1>
          <p className="text-cool-black mb-6">Your order has been cancelled. Your cart has been saved if you'd like to try again.</p>
          <Link to="/cart">
            <Button className="bg-primary-orange hover:bg-primary-yellow hover:text-cool-black">
              Back to Cart
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default CancelPage;
