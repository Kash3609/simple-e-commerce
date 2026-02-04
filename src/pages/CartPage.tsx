import { useState } from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, total } = useCart();
  const [paid, setPaid] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center text-xl">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {/* CART ITEMS */}
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-[#222] p-4 rounded-xl shadow-md"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 object-contain bg-white p-2 rounded"
              />

              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-300">
                  Qty: {item.quantity}
                </p>
                <p className="font-bold">₹ {item.price}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* TOTAL + PAYMENT */}
      <div className="mt-10 bg-[#1a1a1d] p-6 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">
          Total Amount: ₹ {total ? total.toFixed(2) : "0.00"}
        </h2>

        {!paid ? (
          <button
            onClick={() => setPaid(true)}
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold"
          >
            Proceed to Payment
          </button>
        ) : (
          <p className="text-green-400 text-xl font-semibold mt-4">
            ✅ Booking Confirmed! Thank you for shopping 💖
          </p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
