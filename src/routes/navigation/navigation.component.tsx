import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../app/store';
import { removeItemFromCart } from '../../app/cart/cart.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Navigation = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const cartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  return (
    <>
      <nav className=' relative py-4'>
        <div className='container mx-auto flex justify-between'>
          <div>Meta Express</div>
          <div className='flex'>
            <div className='relative'>
              <FontAwesomeIcon
                className='text-gray-700 text-3xl'
                icon={faCartShopping}
              />
              <div className='absolute text-sm bottom-5 left-5 rounded-lg bg-green-600 text-white px-1 '>
                {cartCount}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
