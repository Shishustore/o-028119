import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';

const FailPage = () => {
  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-lg shadow-sm">
          <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
          <h1 className="text-3xl font-bold text-primary-orange mb-4">Payment Failed</h1>
          <p className="text-cool-black mb-6">Unfortunately, we were unable to process your payment. Please try again.</p>
          <Link to="/checkout">
            <Button className="bg-primary-orange hover:bg-primary-yellow hover:text-cool-black">
              Try Again
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default FailPage;
