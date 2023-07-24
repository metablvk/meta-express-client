import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../app/store';

import './navigation.styles.css';

const Navigation = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const cartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  return (
    <>
      <nav className=' relative py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div>
            <Link to='/' className='font-bold text-lg'>
              Meta Express
            </Link>
          </div>
          <div className='flex'>
            <p>
              <Link to='/cart' className='font-bold'>
                {cartCount} items
              </Link>{' '}
              in cart
            </p>
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
