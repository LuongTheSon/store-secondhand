import React from 'react';
import { images } from '@assets/images/assets';
import styles from '../styles.module.scss';

const OurPolicy = () => {
  const { policyList, policyItem, policyImage, policyTtl, policySub } = styles;

  return (
    <section>
      <div className='row'>
        <div className={policyList}>
          <div className={policyItem}>
            <span className={policyImage}>
              <img src={images.exchange_icon} alt='Exchange' />
            </span>
            <p className={policyTtl}>Easy Exchange Policy</p>
            <p className={policySub}>We offer hassle free exchange policy</p>
          </div>
          <div className={policyItem}>
            <span className={policyImage}>
              <img src={images.quality_icon} alt='Exchange' />
            </span>
            <p className={policyTtl}>7 Days Return Policy</p>
            <p className={policySub}>We provide 7 days free return policy </p>
          </div>
          <div className={policyItem}>
            <span className={policyImage}>
              <img src={images.support_img} alt='Exchange' />
            </span>
            <p className={policyTtl}>Best Customer Support</p>
            <p className={policySub}>We provide 24/7 customer support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
