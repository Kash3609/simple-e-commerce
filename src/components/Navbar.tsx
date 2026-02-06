import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">ShopX</Link>

      <Link to="/cart" className="relative">
        🛒 Cart
        <span className="ml-2 bg-red-500 px-2 py-1 rounded text-sm">
          {cartCount}
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
