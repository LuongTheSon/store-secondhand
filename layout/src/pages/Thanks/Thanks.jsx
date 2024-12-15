import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { ShopContext } from '@/context/ShopContext';

const Thanks = () => {
  const { clearCart, navigate } = useContext(ShopContext);
  const { thanksBox, thanksTtl, thanksSub, thanksBtn } = styles;

  const handleClick = () => {
    clearCart();
    navigate('/');
  };

  return (
    <div>
      <div className='row'>
        <div className={thanksBox}>
          <h2 className={thanksTtl}>
            Cảm ơn bạn đã tin tưởng
            <br />
            và mua hàng của chúng tôi.
          </h2>
          <p className={thanksSub}>
            Chúng tôi sẽ kiểm tra nội dung và liên hệ lại với bạn
            <br /> nên vui lòng đợi trong giây lát.
            <br /> Nếu bạn có bất kỳ câu hỏi nào khác, xin vui lòng liên hệ với
            chúng tôi.
          </p>
          <button className={thanksBtn} onClick={handleClick}>
            Page Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
