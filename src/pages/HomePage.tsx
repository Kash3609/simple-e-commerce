import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Premium Store 🛍️
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              className="h-48 mx-auto object-contain"
            />

            <h2 className="mt-4 font-semibold line-clamp-2">
              {item.title}
            </h2>

            <p className="mt-2 font-bold text-green-600">
              ₹ {item.price}
            </p>

            <Link
              to={`/product/${item.id}`}
              className="block mt-4 text-center bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
