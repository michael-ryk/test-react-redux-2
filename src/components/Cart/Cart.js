import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const isShown = useSelector(state => state.cartIsShown);
  const itemsListAddedToCart = useSelector(state => state.cartItems);

  // console.log(itemsListAddedToCart);

  return (
    <>
      {isShown && 
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {!itemsListAddedToCart && <p>Cart is empty</p>}
            {itemsListAddedToCart && 
              itemsListAddedToCart.map(item => <CartItem key={item.id} {...item} />)}
          </ul>
        </Card>
      }
    </>
  );
};

export default Cart;
