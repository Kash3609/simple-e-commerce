import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Reviews from "../components/Reviews";

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={product.image} className="h-60 mx-auto" />
      <h1 className="text-2xl mt-4">{product.title}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-2 font-bold">₹ {product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-500 px-4 py-2 text-white rounded"
      >
        Add to Cart
      </button>

      <Reviews />
    </div>
  );
};

export default ProductPage;
