
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id?: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
}

const ProductCard = ({ id = 1, name, price, image, rating, reviews }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div 
      className="group bg-bright-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-primary-orange/20 hover:border-primary-orange"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-cool-black">{name}</h3>
        <p className="text-primary-orange font-semibold text-lg mt-1">{price}</p>
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-primary-yellow text-primary-yellow" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-cool-black ml-2">({reviews})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
