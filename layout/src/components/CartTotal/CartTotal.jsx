import { ShopContext } from '@/context/ShopContext';
import Title from '@components/Title/Title';
import React, { useContext } from 'react';
import styles from './styles.module.scss';

const CartTotal = () => {
  const { delivery_free, getCartAmount, formatCurrency } = useContext(ShopContext);

  const { totalCart, totalList, totalItemName, totalItemValue, totalItemTotal } = styles;

  return (
    <div className={totalCart}>
      <Title text1={'CART'} text2={'TOTAL'} />
      <ul className={totalList}>
        <li>
          <p className={totalItemName}>subtotal</p>
          <p className={totalItemValue}>
            {getCartAmount() === 0 ? '0' : formatCurrency(getCartAmount())}
          </p>
        </li>
        <li>
          <p className={totalItemName}>Shiping</p>
          <p className={totalItemValue}>{formatCurrency(delivery_free)}</p>
        </li>
        <li>
          <p className={totalItemTotal}>Total</p>
          <p className={totalItemValue}>
            {getCartAmount() === 0 ? '0' : formatCurrency(getCartAmount() + delivery_free)}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CartTotal;
