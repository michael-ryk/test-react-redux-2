import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../store/index.js';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const cartItemsList = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = () => {

    dispatch(
      appActions.addItemToCart({
        title: title,
        price: price,
        description: description
      })
    );

  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
