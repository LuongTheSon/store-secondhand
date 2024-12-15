import React, { useContext, useState } from 'react';
import CartTotal from '@components/CartTotal/CartTotal';
import styles from './styles.module.scss';
import Title from '@components/Title/Title';
import { ShopContext } from '@/context/ShopContext';

const Order = () => {
  const { navigate } = useContext(ShopContext);
  const [payment, setPayment] = useState('cod');

  const {
    orderWrap,
    order,
    orderForm,
    formRow,
    formCol,
    formInputStyle,
    orderTotal,
    paymentBox,
    paymentItem,
    paymentName,
    paymentDot,
    totalbutton
  } = styles;

  return (
    <section>
      <div className='row'>
        <div className={orderWrap}>
          <div className={order}>
            <Title text1={'Delivery'} text2={'Information'} />
            <div className={orderForm}>
              <form action=''>
                <div className={formRow}>
                  <div className={formCol}>
                    <input
                      type='text'
                      placeholder='First name'
                      className={formInputStyle}
                    />
                  </div>
                  <div className={formCol}>
                    <input
                      type='text'
                      placeholder='Last name'
                      className={formInputStyle}
                    />
                  </div>
                </div>
                <div className={formRow}>
                  <input
                    type='email'
                    placeholder='Email addess'
                    className={formInputStyle}
                  />
                </div>
                <div className={formRow}>
                  <input
                    type='text'
                    placeholder='Street'
                    className={formInputStyle}
                  />
                </div>
                <div className={formRow}>
                  <div className={formCol}>
                    <input
                      type='text'
                      placeholder='City'
                      className={formInputStyle}
                    />
                  </div>
                  <div className={formCol}>
                    <input
                      type='text'
                      placeholder='State'
                      className={formInputStyle}
                    />
                  </div>
                </div>
                <div className={formRow}>
                  <div className={formCol}>
                    <input
                      type='text'
                      placeholder='Zip code'
                      className={formInputStyle}
                    />
                  </div>
                  <div className={formCol}>
                    <input
                      type='text'
                      placeholder='Country'
                      className={formInputStyle}
                    />
                  </div>
                </div>
                <div className={formRow}>
                  <input
                    type='text'
                    placeholder='Phone'
                    className={formInputStyle}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className={orderTotal}>
            <CartTotal />
            <div className={paymentBox}>
              <div className={paymentItem} onClick={() => setPayment('cod')}>
                <p
                  className={`${paymentDot} ${
                    payment === 'cod' ? styles.active : ''
                  }`}
                ></p>
                <p className={paymentName}>Thanh toán khi nhận hàng (COD)</p>
              </div>
              <div className={paymentItem} onClick={() => setPayment('bank')}>
                <p
                  className={`${paymentDot} ${
                    payment === 'bank' ? styles.active : ''
                  }`}
                ></p>
                <p className={paymentName}>Thanh toán bằng chuyển khoản</p>
              </div>
            </div>
            <button onClick={() => navigate('/thanks')} className={totalbutton}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
