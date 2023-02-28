import ProductList from '../../components/ProductList/ProductList';
import styles from './Account.module.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AccountPage = () => {
  const [category, setCategory] = useState();
  const location = useLocation();

  useEffect(() => {
    console.log('f');
    const params = location.pathname;
    if (params === '/twitter-blue') {
      setCategory('Twitter Blue');
    } else if (params === '/twitter-accounts') {
      setCategory('Twitter');
    } else if (params === '/discord-accounts') {
      setCategory('Discord');
    } else if (params === '/instagram-accounts') {
      setCategory('Instagram');
    }
  }, [location.pathname]);

  return (
    <div>
      <ProductList key={1} category={category} />
    </div>
  );
};

export default AccountPage;
