import { ShopContext } from '@/context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';
import Title from '@components/Title/Title';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import styles from './styles.module.scss';

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  const { relatedBox, relatedList } = styles;

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className={relatedBox}>
      <Title text1={'RELATED'} text2={'PRODUCTS'} />
      <ul className={relatedList}>
        {related.map((item) => (
          <ItemProduct
            key={item._id}
            id={item._id}
            title={item.name}
            image={item.image}
            price={item.price}
            onClick={handleScrollToTop}
          />
        ))}
      </ul>
    </div>
  );
};

export default RelatedProduct;
