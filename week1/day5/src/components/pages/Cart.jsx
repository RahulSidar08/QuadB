import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/cartSlice';

const Cart = () => {
  const cart = useSelector(state => state.cart.carts);
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded shadow mb-3">
            <span>{item.name} - ${item.price}</span>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
