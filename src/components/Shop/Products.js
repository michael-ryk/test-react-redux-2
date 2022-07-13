import ProductItem from './ProductItem';
import classes from './Products.module.css';
import listOfProducts from './listOfProducts';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {listOfProducts.map(item => {
          return (
            <ProductItem key={item.id} 
              title={item.title}
              price={item.price}
              description={item.description}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
