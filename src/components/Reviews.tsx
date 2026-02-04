const Reviews = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Customer Reviews
      </h2>

      <div className="space-y-3">
        <div className="bg-gray-100 p-3 rounded">
          ⭐ ⭐ ⭐ ⭐ ☆
          <p className="text-sm text-gray-700">
            Very good product, quality is nice.
          </p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          ⭐ ⭐ ⭐ ⭐ ⭐
          <p className="text-sm text-gray-700">
            Totally worth the price, loved it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
