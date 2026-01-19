import React from 'react';
import styles from './styles.module.scss';

const Subscribe = () => {
  const { subscribe, subscribeTtl, subscribeSub, subscribeEmail, subscribeBtn } = styles;
  return (
    <section>
      <div className='row'>
        <div className={subscribe}>
          <h2 className={subscribeTtl}>Subscribe now & get 20% off</h2>
          <p className={subscribeSub}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <form action=''>
            <input type='email' className={subscribeEmail} placeholder='Enter your email id' />
            <button type='submit' className={subscribeBtn}>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
