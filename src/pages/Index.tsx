
import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-light-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-light-cream">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-up">
            <p className="text-cool-black text-lg mb-4">
              Quality clothing for your little ones 👶
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-primary-orange">
              Premium kids clothing for newborn to 8 years
            </h1>
            <button 
              onClick={() => navigate('/marketplace')}
              className="bg-primary-orange text-bright-white px-8 py-3 rounded-full hover:bg-primary-yellow hover:text-cool-black transition-colors flex items-center gap-2"
            >
              Shop Now
              <span className="inline-block">→</span>
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative">
            <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-primary-yellow rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-20 w-48 h-48 bg-primary-orange rounded-full opacity-30 blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1522771930-78848d9293e8"
              alt="Happy children in beautiful clothes"
              className="rounded-2xl shadow-lg relative z-10"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 px-4 text-primary-orange">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <ProductCard
              name="Cute Baby Onesie"
              price="৳450"
              image="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4"
              rating={5}
              reviews={12}
            />
            <ProductCard
              name="Toddler Dress Set"
              price="৳850"
              image="https://images.unsplash.com/photo-1519238263530-99bdd11df2ea"
              rating={4}
              reviews={8}
            />
            <ProductCard
              name="Kids Summer Outfit"
              price="৳650"
              image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
              rating={5}
              reviews={15}
            />
            <ProductCard
              name="Baby Boy Romper"
              price="৳380"
              image="https://images.unsplash.com/photo-1544963503-4d9e6f608c10"
              rating={4}
              reviews={10}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-bright-white">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-primary-orange">Stay updated with new collections</h2>
            <p className="text-cool-black">Get notified about the latest arrivals, seasonal collections, and special offers for your little ones...</p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-yellow text-cool-black flex items-center justify-center text-sm font-semibold">01</span>
                <span>New seasonal collections</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-orange text-bright-white flex items-center justify-center text-sm font-semibold">02</span>
                <span>Free shipping offers</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-yellow text-cool-black flex items-center justify-center text-sm font-semibold">03</span>
                <span>Size & care guides</span>
              </div>
            </div>

            <div className="flex gap-2 max-w-md">
              <Input placeholder="Enter your email" className="flex-1 border-primary-orange focus:ring-primary-orange" />
              <Button className="bg-primary-orange hover:bg-primary-yellow hover:text-cool-black">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560460501-d4b9926e0fb8"
              alt="Children wearing beautiful clothes"
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-primary-yellow w-20 h-20 mx-auto rounded-lg flex items-center justify-center">
                <ChevronDown className="w-10 h-10 text-cool-black" />
              </div>
              <p className="text-sm text-primary-orange font-semibold">Step 1</p>
              <h3 className="font-semibold text-lg text-primary-orange">Browse by Age</h3>
              <p className="text-cool-black text-sm">Find perfect fits for your child's age group and size</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="bg-primary-orange w-20 h-20 mx-auto rounded-lg flex items-center justify-center">
                <Plus className="w-10 h-10 text-bright-white" />
              </div>
              <p className="text-sm text-primary-orange font-semibold">Step 2</p>
              <h3 className="font-semibold text-lg text-primary-orange">Add to Cart</h3>
              <p className="text-cool-black text-sm">Select size, quantity and add your favorite items to cart</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-primary-yellow w-20 h-20 mx-auto rounded-lg flex items-center justify-center">
                <ChevronUp className="w-10 h-10 text-cool-black" />
              </div>
              <p className="text-sm text-primary-orange font-semibold">Step 3</p>
              <h3 className="font-semibold text-lg text-primary-orange">Fast Delivery</h3>
              <p className="text-cool-black text-sm">Quick and safe delivery right to your doorstep</p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-primary-orange w-20 h-20 mx-auto rounded-lg flex items-center justify-center">
                <Check className="w-10 h-10 text-bright-white" />
              </div>
              <p className="text-sm text-primary-orange font-semibold">Step 4</p>
              <h3 className="font-semibold text-lg text-primary-orange">Happy Kids</h3>
              <p className="text-cool-black text-sm">Watch your little ones shine in premium quality clothes</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
