import React from 'react';
import Navbar from '@/components/Navbar';
import { Badge } from '@/components/ui/badge';
import ordersData from '@/data/orders.json';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-primary-orange mb-8">My Account</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Order History</h2>
          <div className="space-y-6">
            {ordersData.map(order => (
              <div key={order.orderId} className="border p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Order #{order.orderId}</h3>
                  <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>{order.status}</Badge>
                </div>
                <p className="text-sm text-gray-500">Date: {order.date}</p>
                <p className="font-bold">Total: {order.total}</p>
                {order.remarks && <p className="text-sm mt-2 pt-2 border-t"><strong>Remarks:</strong> {order.remarks}</p>}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
