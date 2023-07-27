import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../app/store';

import './navigation.styles.css';
import Cart from '../../components/cart/cart.component';

const Navigation = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const cartCount = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  useEffect(() => {
    // Hide scroll bar when menu is open
    if (cartOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  }, [cartOpen]);

  const handleClick = () => {
    setCartOpen(!cartOpen);
  };
  return (
    <div className='relative h-full'>
      <nav className='py-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div>
            <Link to='/' className='font-bold text-lg'>
              Meta Express
            </Link>
          </div>

          <div className='flex'>
            <p>
              <button onClick={handleClick} className='font-bold'>
                {cartCount} items
              </button>{' '}
              in cart
            </p>
          </div>
        </div>
      </nav>
      {cartOpen ? (
        <Cart cartOpen={cartOpen} handleClick={handleClick} />
      ) : (
        false
      )}
      <div className='container mx-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
