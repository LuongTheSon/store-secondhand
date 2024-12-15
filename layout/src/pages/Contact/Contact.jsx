import React from 'react';
import { images } from '@assets/images/assets';
import styles from './styles.module.scss';
import Title from '@components/Title/Title';
import { Link } from 'react-router-dom';
import Subscribe from '@components/Subscribe/Subscribe';

const Contact = () => {
  const {
    boxTtl,
    contactWrap,
    contactImage,
    contactInfor,
    inforItem,
    inforHead,
    inforTxt,
    number,
    inforBtn
  } = styles;
  return (
    <>
      <section>
        <div className='row'>
          <div className={boxTtl}>
            <Title text1={'CONTACT'} text2={'US'} />
          </div>
          <div className={contactWrap}>
            <figure className={contactImage}>
              <img src={images.contact_img} alt='' />
            </figure>
            <div className={contactInfor}>
              <div className={inforItem}>
                <p className={inforHead}>Our Store</p>
                <p className={inforTxt}>
                  Phú Bài
                  <br />
                  Huế, Việt Nam
                </p>
                <p className={inforTxt}>
                  <a href='tel:2124567890' className={number}>
                    Tel: +1-212-456-7890
                  </a>
                  <br />
                  Email: luongtheson132@gmail.com
                </p>
              </div>
              <div className={inforItem}>
                <p className={inforHead}>Careers</p>
                <p className={inforTxt}>
                  Learn more about our teams and job openings.
                </p>
                <div className={inforBtn}>
                  <Link>Explore Jobs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default Contact;
