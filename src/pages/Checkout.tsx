import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import API_URL from '@/config';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import bdCities from '@/data/bd-cities.json';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const CheckoutPage = () => {
    const { cartItems, clearCart } = useCart();
    const { user } = useAuth();
    const [paymentMethod, setPaymentMethod] = useState('sslcommerz');
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('৳', '')) * item.quantity), 0);

    const handlePlaceOrder = async () => {
        if (cartItems.length === 0) {
            toast({ title: "Your cart is empty.", variant: "destructive" });
            return;
        }

        const orderDetails = {
            customerName: user?.name || 'Guest User',
            email: user?.email || 'guest@example.com',
            phone: '01xxxxxxxxx',
            total: totalPrice,
            items: cartItems,
        };

        toast({ title: "Processing your order..." });

        try {
            const response = await fetch(`${API_URL}/api/create-payment-session`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paymentMethod, orderDetails }),
            });

            if (!response.ok) throw new Error('Failed to create payment session.');
            
            const session = await response.json();
            window.location.href = session.redirectUrl;
            
        } catch (error) {
            toast({ title: "Something went wrong!", description: "Could not initiate payment.", variant: "destructive" });
        }
    };

  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-primary-orange mb-8 text-center">Checkout</h1>
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                    <div className="grid gap-6">
                        {/* Form fields here */}
                    </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-sm h-fit">
                    <h2 className="text-2xl font-bold mb-4">Your Order</h2>
                    {/* Order summary */}
                    <h3 className="text-xl font-bold mt-6 mb-4">Payment Method</h3>
                    <RadioGroup defaultValue="sslcommerz" onValueChange={setPaymentMethod} className="space-y-2">
                        <Label className="flex items-center space-x-3 p-3 border rounded-md has-[:checked]:bg-primary-yellow/20 has-[:checked]:border-primary-orange">
                            <RadioGroupItem value="sslcommerz" id="sslcommerz" />
                            <span>Card / Mobile Banking</span>
                        </Label>
                        <Label className="flex items-center space-x-3 p-3 border rounded-md has-[:checked]:bg-primary-yellow/20 has-[:checked]:border-primary-orange">
                            <RadioGroupItem value="cod" id="cod" />
                            <span>Cash on Delivery</span>
                        </Label>
                    </RadioGroup>
                    <Button onClick={handlePlaceOrder} className="w-full bg-primary-orange hover:bg-primary-yellow hover:text-cool-black mt-6 text-lg py-6">
                        Place Order
                    </Button>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
