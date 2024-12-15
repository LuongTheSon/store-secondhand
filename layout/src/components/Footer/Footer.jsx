import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '@assets/images/assets';
import styles from './styles.module.scss';

const Footer = () => {
  const {
    footerWrap,
    footerInfor,
    footerLogo,
    footerDescript,
    footerMenu,
    footerMenuItem,
    footerMenuTtl,
    footerMenuNavbar,
    copyright,
    disable
  } = styles;

  return (
    <footer>
      <div className='row'>
        <div className={footerWrap}>
          <div className={footerInfor}>
            <div className={footerLogo}>
              <Link to='/'>
                <img src={images.logo} alt='sneaker secondhand' />
              </Link>
            </div>
            <p className={footerDescript}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className={footerMenu}>
            <div className={footerMenuItem}>
              <p className={footerMenuTtl}>COMPANY</p>
              <ul className={footerMenuNavbar}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About us</Link>
                </li>
                <li>
                  <Link to='/collection'>Collection</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact us</Link>
                </li>
              </ul>
            </div>
            <div className={footerMenuItem}>
              <p className={footerMenuTtl}>GET IN TOUCH</p>
              <ul className={footerMenuNavbar}>
                <li>
                  <a href='tel:124567890'>+1-212-456-7890</a>
                </li>
                <li>
                  <a href='#' className={disable}>
                    luongtheson132@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className={copyright}>Copyright 2024 &copy; All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
