import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16 flex items-center justify-center">
        <div className="text-center bg-white p-10 rounded-lg shadow-sm">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl font-bold text-primary-orange mb-4">Payment Successful!</h1>
          <p className="text-cool-black mb-6">Thank you for your order. A confirmation email and SMS will be sent shortly.</p>
          <Link to="/marketplace">
            <Button className="bg-primary-orange hover:bg-primary-yellow hover:text-cool-black">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;
