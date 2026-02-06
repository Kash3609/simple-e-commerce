import { useState } from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, increaseQty, decreaseQty } = useCart();
  const [confirmed, setConfirmed] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  const handlePayment = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-green-600">
          🎉 Booking Confirmed!
        </h1>
        <p className="mt-4 text-lg">
          Thank you for shopping with us ❤️
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cart.length === 0 && (
        <p className="text-gray-500">Cart is empty</p>
      )}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 mb-5 border rounded-lg p-4 shadow-sm"
        >
          <img
            src={item.image}
            className="w-20 h-20 object-contain"
          />

          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">₹ {item.price}</p>

            {/* 🔥 PLUS MINUS PREMIUM */}
            <div className="flex items-center gap-4 mt-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-9 h-9 flex items-center justify-center 
                rounded-full bg-red-100 text-red-600 
                active:scale-90 transition"
              >
                −
              </button>

              <span className="font-bold text-lg">
                {item.quantity}
              </span>

              <button
                onClick={() => increaseQty(item.id)}
                className="w-9 h-9 flex items-center justify-center 
                rounded-full bg-green-100 text-green-600 
                active:scale-90 transition"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-8 border-t pt-6">
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </p>

          <p className="flex justify-between text-green-600">
            <span>Discount (10%)</span>
            <span>- ₹ {discount.toFixed(2)}</span>
          </p>

          <h3 className="flex justify-between font-bold text-xl mt-2">
            <span>Total</span>
            <span>₹ {total.toFixed(2)}</span>
          </h3>

          {/* 🔥 PROCEED TO PAYMENT */}
          <button
            onClick={handlePayment}
            className="w-full mt-6 bg-black text-white 
            py-3 rounded-lg text-lg 
            hover:bg-gray-800 transition"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
