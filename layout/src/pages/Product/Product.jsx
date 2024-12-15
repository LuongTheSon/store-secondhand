import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '@/context/ShopContext';
import styles from './styles.module.scss';
import { images } from '@assets/images/assets';
import RelatedProduct from '@components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { productId } = useParams();
  const { products, formatCurrency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [thumnail, setThumnail] = useState('');
  const [size, setSize] = useState('');

  const {
    productDetailTop,
    thumbnailBox,
    thumbnailSlide,
    thumbnailSlideItem,
    thumbnail_1x1,
    inforBox,
    inforTitle,
    inforRates,
    starRates,
    numberRates,
    inforPrice,
    inforDescript,
    selectSizeTtl,
    selectSize,
    inforButton,
    inforCommit,
    descriptionTtl,
    descriptionSub
  } = styles;

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setThumnail(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  console.log(productData);

  return productData ? (
    <section>
      <div className='row'>
        <div className={productDetailTop}>
          {/* Thumbnail */}
          <div className={thumbnailBox}>
            <div className={thumbnailSlide}>
              {productData.image.map((item, index) => (
                <div className={thumbnailSlideItem} key={index}>
                  <img onClick={() => setThumnail(item)} src={item} alt='' />
                </div>
              ))}
            </div>
            <figure className={thumbnail_1x1}>
              <img src={thumnail} alt='' className='fit' />
            </figure>
          </div>

          {/* Information detail */}
          <div className={inforBox}>
            <h1 className={inforTitle}>{productData.name}</h1>
            <div className={inforRates}>
              <div className={starRates}>
                <span>
                  <img src={images.star_icon} alt='' />
                </span>
                <span>
                  <img src={images.star_icon} alt='' />
                </span>
                <span>
                  <img src={images.star_icon} alt='' />
                </span>
                <span>
                  <img src={images.star_icon} alt='' />
                </span>
                <span>
                  <img src={images.star_dull_icon} alt='' />
                </span>
              </div>
              <p className={numberRates}>(122)</p>
            </div>
            <p className={inforPrice}>{formatCurrency(productData.price)}</p>
            <p className={inforDescript}>{productData.description}</p>
            <p className={selectSizeTtl}>Select Size</p>
            <div className={selectSize}>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={item === size ? styles.activeSize : ''}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className={inforButton}
            >
              ADD TO CART
            </button>
            <p className={inforCommit}>
              100% Original product.
              <br />
              Cash on delivery is available on this product.
              <br />
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>

        {/* Description Detail */}
        <div>
          <h2 className={descriptionTtl}>Description</h2>
          <div className={descriptionSub}>
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>

        {/* Related Detail */}
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </div>
    </section>
  ) : (
    <div>404</div>
  );
};

export default Product;
