import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h4>Pure Shop</h4>
      <p>Низкие цены, лучшее качество</p>
    </div>
  );
};

export default Header;
