import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price }));
    navigate("/cart")
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 font-medium mb-4">${price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
