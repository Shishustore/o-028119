
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Newborn", icon: "👶" },
  { name: "Baby Sets", icon: "👕" },
  { name: "Toddler Dress", icon: "👗" },
  { name: "Kids Casual", icon: "👔" },
  { name: "Sleep Wear", icon: "🌙" },
  { name: "Accessories", icon: "🧸" },
];

const CategoryNav = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className="group p-6 bg-bright-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center space-y-2 hover:bg-primary-yellow"
        >
          <span className="text-3xl">{category.icon}</span>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium text-cool-black group-hover:text-cool-black">{category.name}</span>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all text-primary-orange" />
          </div>
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;
