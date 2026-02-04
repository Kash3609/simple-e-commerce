import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum: number, item: any) => sum + item.quantity,
    0
  );

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* LOGO */}
      <Link to="/" className="text-2xl font-bold">
        🛍️ PremiumStore
      </Link>

      {/* LINKS */}
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>

        <Link to="/cart" className="relative hover:text-gray-300">
          Cart 🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
