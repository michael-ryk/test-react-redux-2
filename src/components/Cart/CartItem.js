import { useDispatch } from 'react-redux';
import { appActions } from '../../store/index';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price } = props;

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      appActions.addItemToCart({ title: title, total: total, price: price })
    );
  };

  const handleDecrease = () => {
    // Remove Decrease - TBD
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
