import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ShopContext } from '@/context/ShopContext';
import { images } from '@assets/images/assets';
import styles from './styles.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const location = useLocation();

  const getNavLinkClass = ({ isActive, isPending }) =>
    isPending ? 'pending' : isActive ? styles.active : '';

  const {
    header,
    headerWrap,
    headerLogo,
    headerMenu,
    headerAction,
    headerSearch,
    headerProfile,
    headerCart,
    headerHamburger
  } = styles;

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
      setShowSearch(false);
    }
  }, [location]);

  return (
    <header className={header} id='header'>
      <div className={`row ${headerWrap}`}>
        <h1 className={headerLogo}>
          <Link to='/'>
            <img src={images.logo} className='fit' alt='header logo' />
          </Link>
        </h1>
        <div
          className={`${isOpen ? styles.openHeaderMenu : ''}  ${headerMenu}`}
        >
          <ul>
            <li>
              <NavLink
                className={getNavLinkClass}
                to='/'
                onClick={() => setIsOpen(false)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={getNavLinkClass}
                to='/collection'
                onClick={() => setIsOpen(false)}
              >
                COLLECTION
              </NavLink>
            </li>
            <li>
              <NavLink
                className={getNavLinkClass}
                to='/about'
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={getNavLinkClass}
                to='/contact'
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={headerAction}>
          <div
            className={`${headerSearch} ${visible ? '' : 'disable'}`}
            onClick={() => setShowSearch((prev) => !prev)}
          >
            {visible ? (
              <img src={images.search_icon} alt='' className='fit' />
            ) : (
              <img src={images.search_icon_disable} alt='' className='fit' />
            )}
          </div>

          <div className={headerProfile}>
            <Link to='/login'>
              <img src={images.profile_icon} alt='' className='fit' />
            </Link>
          </div>
          <div className={headerCart}>
            <Link to='/cart'>
              <img src={images.cart_icon} alt='' />
              <p>{getCartCount()}</p>
            </Link>
          </div>
          <div
            className={`${isOpen ? styles.openMenu : ''}  ${headerHamburger}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
