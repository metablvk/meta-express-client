import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../app/store';
import { removeItemFromCart } from '../../app/cart/cart.slice';
import { useDispatch } from 'react-redux';
import type { SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

type CartProps = {
  cartOpen: boolean;
  handleClick: SetStateAction<any>;
};
const Cart = ({ handleClick }: CartProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (acc, c) => acc + c.product.price * c.quantity,
    0
  );
  // const handleClick = () => {
  //   // @ts-ignore FIX LATER
  //   setCartOpen(!cartOpen);
  // };

  return (
    <div className='border absolute right-0 top-0 w-full md:w-2/3 lg:w-1/3 bg-white z-20 h-full py-4 overflow-scroll'>
      <div className='px-8 pb-4 flex items-center justify-between'>
        <h2 className='font-bold text-2xl tracking-wide'>Cart</h2>
        <FontAwesomeIcon
          icon={faClose}
          onClick={handleClick}
          className='hover:cursor-pointer text-2xl'
        />
      </div>
      <hr className='border border-gray-300' />
      <div>
        <h3 className='px-8 py-4 text-right'>
          Total Cart Price:{' '}
          <span className='font-bold'>{totalPrice.toFixed(2)}</span>
        </h3>
        <div className='pb-20'>
          {cartItems.map((cartItem) => {
            return (
              <>
                <div className='mt-4 p-8'>
                  <img
                    src={cartItem.product.image[0].asset.url}
                    className='w-2/3 md:w-1/3 mb-2'
                    alt=''
                  />
                  <h4>{cartItem.product.name}</h4>
                  <div className='flex justify-between items-center mt-4'>
                    <p className='text-gray-400'>
                      Quantity{' '}
                      <span className='text-gray-600 font-bold'>
                        {cartItem.quantity}
                      </span>
                    </p>
                    <button
                      className='font-bold'
                      onClick={() => dispatch(removeItemFromCart(cartItem))}
                    >
                      remove
                    </button>
                  </div>
                </div>
                <hr className='border border-gray-300' />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
