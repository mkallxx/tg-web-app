import Button from '../Button/Button';
import styles from './ProductItem.module.scss';

const ProductItem = ({ product, onAdd }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

  return (
    <div>
      <div className={styles.img} />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.price}>
        <span>
          <b>{product.price}</b>
        </span>
      </div>
      <Button className={styles.addBtn} onClick={onAddHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};

export default ProductItem;
