import Header from '../Header/Header';
import styles from './Welcome.module.scss';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.category}>
        <h2>Категории товаров</h2>

        <h3>Привилегии: </h3>
        <Link to="/twitter-blue">Twitter Blue (галочка ✔️)</Link>
        <h3>Аккаунты:</h3>

        <Link to="/twitter-accounts">Twitter</Link>
        <Link to="/discord-accounts">Discord</Link>
        <Link to="/instagram-accounts">Instagram</Link>
      </div>
    </div>
  );
};

export default Welcome;
