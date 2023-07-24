import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../app/store';
import { removeItemFromCart } from '../../app/cart/cart.slice';
import { useDispatch } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <div>
      {cartItems.map((item, id) => {
        return (
          <div className='md:flex items-center' key={id}>
            <img
              src={item.product.image[0].asset.url}
              className='w-1/2 mx-auto md:ml-auto md:w-1/3 lg:w-1/4 '
              alt=''
            />
            <div className='flex flex-col w-full md:w-1/4  my-4 space-y-2 sm:flex-row sm:space-y-0  md:flex-col md:space-x-0 md:space-y-2'>
              <h2 className='font-bold'>{item.product.name}</h2>
              <p>Qty: {item.quantity}</p>
              <button
                onClick={() => dispatch(removeItemFromCart(item))}
                className='w-full border border-gray-600 text-gray-600 py-4 '
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
