import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ShopContext } from '@/context/ShopContext';

const ItemProduct = ({ id, title, image, price, onClick }) => {
  const { formatCurrency } = useContext(ShopContext);
  const { productName, productPrice } = styles;
  return (
    <li>
      <Link to={`/collection/${id}`} onClick={onClick}>
        <figure>
          <img src={image[0]} alt='' />
        </figure>
        <p className={productName}>{title}</p>
        <p className={productPrice}>{formatCurrency(price)}</p>
      </Link>
    </li>
  );
};

export default ItemProduct;
