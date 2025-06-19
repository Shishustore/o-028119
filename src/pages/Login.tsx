import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const LoginPage = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // In a real app, you'd verify credentials. Here, we'll just log the user in.
    login("user@example.com");
    toast({ title: "Login Successful", description: "Welcome back!" });
  };

  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-48 pb-16 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-primary-orange mb-6 text-center">Login</h1>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button onClick={handleLogin} className="w-full bg-primary-orange hover:bg-primary-yellow hover:text-cool-black">Login</Button>
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">Login with Google</Button>
            <p className="text-center text-sm text-gray-600">
              Don't have an account? <Link to="/register" className="text-primary-orange hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
