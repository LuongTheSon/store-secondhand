import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '@/context/ShopContext';
import Title from '@components/Title/Title';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import styles from '../styles.module.scss';

const NewCollection = () => {
  const { products } = useContext(ShopContext);
  const [newProduct, setNewProduct] = useState([]);
  const { newsCollection, boxTitle, description, productList } = styles;

  useEffect(() => {
    setNewProduct(products.slice(0, 10));
  }, []);

  return (
    <section className={newsCollection} id='newsCollect'>
      <div className='row'>
        <div className={boxTitle}>
          <Title text1={'NEWS'} text2={'COLLECTIONS'} />
          <p className={description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
        <ul className={productList}>
          {newProduct.map((item) => (
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

export default NewCollection;
