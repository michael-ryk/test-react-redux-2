import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../../store/index.js';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const cartItemsList = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleAddToCart = () => {

    const indexOfExistingItem = cartItemsList.findIndex(
      (item) => item.title === title
    );

    if (indexOfExistingItem < 0) {
      //item not in list - create new
      dispatch(
        appActions.addItemToCart({
          id: new Date().getTime().toString(),
          title: title,
          quantity: 1,
          total: price,
          price: price,
        })
      );
    } else {
      //item already in list - update
      dispatch(appActions.increaseQuantityOfItemInCart(indexOfExistingItem));
    }
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
