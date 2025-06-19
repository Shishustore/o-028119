import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-48 pb-16 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-primary-orange mb-6 text-center">Create an Account</h1>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="John Doe" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full bg-primary-orange hover:bg-primary-yellow hover:text-cool-black">Register</Button>
            <p className="text-center text-sm text-gray-600">
              Already have an account? <Link to="/login" className="text-primary-orange hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
