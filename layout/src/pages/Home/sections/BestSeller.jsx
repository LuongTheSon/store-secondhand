import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '@/context/ShopContext';
import Title from '@components/Title/Title';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import styles from '../styles.module.scss';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const { sectionSeller, boxTitle, description, productList } = styles;

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <section className={sectionSeller} id='bestseller'>
      <div className='row'>
        <div className={boxTitle}>
          <Title text1={'BEST'} text2={'SELLER'} />
          <p className={description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        <ul className={productList}>
          {bestSeller.map((item) => (
            <ItemProduct
              key={item._id}
              id={item._id}
              title={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BestSeller;
