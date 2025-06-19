
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Cotton Onesie",
    price: "৳420",
    rating: 5,
    reviews: 23,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4"
  },
  {
    id: 2,
    name: "Baby Girl Dress Set",
    price: "৳850",
    rating: 4,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"
  },
  {
    id: 3,
    name: "Toddler Summer Outfit",
    price: "৳680",
    rating: 5,
    reviews: 31,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
  },
  {
    id: 4,
    name: "Kids Casual T-Shirt",
    price: "৳320",
    rating: 4,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1544963503-4d9e6f608c10"
  }
];

const Marketplace = () => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("newest");
  const [category, setCategory] = useState("all");

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary-orange">Kids Collection</h1>
          <p className="text-cool-black">
            Discover our premium collection of children's clothing designed for comfort, 
            style, and the active lifestyle of your little ones.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex gap-4 items-center">
            <div className="text-sm text-cool-black">Showing 1-12 of 120 items</div>
            
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px] border-primary-orange">
                <SelectValue placeholder="Age Groups" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ages</SelectItem>
                <SelectItem value="newborn">Newborn (0-3m)</SelectItem>
                <SelectItem value="baby">Baby (3-12m)</SelectItem>
                <SelectItem value="toddler">Toddler (1-3y)</SelectItem>
                <SelectItem value="kids">Kids (4-8y)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px] border-primary-orange">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Top Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-bright-white border-primary-orange/20 hover:border-primary-orange"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-cool-black">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary-orange font-semibold text-lg">{product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary-yellow text-primary-yellow" />
                    <span className="text-sm text-cool-black">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;
