import styles from './Welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <h2>Категории товаров</h2>

        <h3>Прочее: </h3>
        <a href="/">Twitter Blue</a>
        <h3>Аккаунты:</h3>
        <a href="/">Twitter</a>
        <a href="/">Discord</a>
        <a href="/">Instagram</a>
      </div>
    </div>
  );
};

export default Welcome;
