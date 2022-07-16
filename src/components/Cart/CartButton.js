import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../store/index';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsInCartQuantity = useSelector(state => state.totalQuantity)
  const handleButtonClick = () => {
    dispatch(appActions.toggleCartShown());
  }

  return (
    <button onClick={handleButtonClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsInCartQuantity}</span>
    </button>
  );
};

export default CartButton;
