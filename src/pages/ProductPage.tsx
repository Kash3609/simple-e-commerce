import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Reviews from "../components/Reviews";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 grid md:grid-cols-2 gap-8">

        <img
          src={product.image}
          className="h-72 mx-auto object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-3">{product.description}</p>

          <p className="mt-4 text-2xl font-bold text-green-600">
            ₹ {product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8 bg-white shadow rounded p-6">
        <Reviews />
      </div>
    </div>
  );
};

export default ProductPage;
