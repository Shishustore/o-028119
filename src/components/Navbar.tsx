
import { Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bright-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary-orange">Shishu Poribohon</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/marketplace" className="nav-link">Newborn (0-3m)</Link>
          <Link to="/marketplace" className="nav-link">Baby (3-12m)</Link>
          <Link to="/marketplace" className="nav-link">Toddler (1-3y)</Link>
          <Link to="/marketplace" className="nav-link">Kids (4-8y)</Link>
        </div>

        <div className="flex items-center space-x-6">
          <button className="p-2 hover:text-primary-orange transition-colors">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-primary-orange transition-colors">
            <User size={20} />
          </button>
          <button className="p-2 hover:text-primary-orange transition-colors">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
