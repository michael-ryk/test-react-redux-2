import { useDispatch } from 'react-redux';
import { appActions } from '../../store/index';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(appActions.toggleCartShown());
  }

  return (
    <button onClick={handleButtonClick} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
