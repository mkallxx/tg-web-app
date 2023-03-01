import Button from '../Button/Button';
import styles from './ProductItem.module.scss';

const ProductItem = ({ product, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div className={styles.item}>
      <div>{product.title}</div>
      <div>{product.description}</div>
    </div>
  );
};

export default ProductItem;
