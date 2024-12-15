import Title from '@components/Title/Title';
import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { ShopContext } from '@/context/ShopContext';
import { images } from '@assets/images/assets';
import CartTotal from '@components/CartTotal/CartTotal';

const Cart = () => {
  const { products, cartItems, updateCartCount, navigate, formatCurrency } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const {
    cartList,
    cartItem,
    cartbox,
    cartInfor,
    cartImage,
    cartName,
    cartBoxName,
    cartQuantify,
    cartRemove,
    cartBoxPrice,
    cartPrice,
    cartSize,
    cartTotal,
    totalbutton,
    messageTxt,
    messageBtn
  } = styles;

  return cartData.length > 0 ? (
    <section>
      <div className='row'>
        <Title text1={'YOUR'} text2={'CART'} />
        <div className={cartList}>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div className={cartItem} key={index}>
                <div className={cartbox}>
                  <figure className={cartImage}>
                    <img src={productData.image[0]} alt='' />
                  </figure>
                  <div className={cartInfor}>
                    <div className={cartBoxName}>
                      <p className={cartName}>{productData.name}</p>
                      <div className={cartBoxPrice}>
                        <span className={cartPrice}>
                          {formatCurrency(productData.price)}
                        </span>
                        <span className={cartSize}>{item.size}</span>
                      </div>
                    </div>
                    <input
                      onClick={(e) =>
                        e.target.value === '' || e.target.value === '0'
                          ? null
                          : updateCartCount(
                              item._id,
                              item.size,
                              Number(e.target.value)
                            )
                      }
                      type='number'
                      min={1}
                      defaultValue={item.quantity}
                      className={cartQuantify}
                    />
                    <div
                      className={cartRemove}
                      onClick={() => updateCartCount(item._id, item.size, 0)}
                    >
                      <img src={images.bin_icon} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cartTotal}>
          <CartTotal />
          <button onClick={() => navigate('/order')} className={totalbutton}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </section>
  ) : (
    <>
      <p className={messageTxt}>Bạn chưa chọn sản phẩm</p>
      <button className={messageBtn} onClick={() => navigate('/')}>
        Page Home
      </button>
    </>
  );
};

export default Cart;
