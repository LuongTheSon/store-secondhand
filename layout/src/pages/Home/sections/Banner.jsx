import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Link } from 'react-scroll';
import { images, bannerHome } from '@/assets/images/assets';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import styles from '../styles.module.scss';

const Banner = () => {
  const {
    banner,
    bannerWrap,
    bannerBig,
    bannerSmall,
    bannerSmallItem,
    bannerImg,
    bannerSwiper,
    bannerSwiperItem
  } = styles;

  return (
    <section className={banner}>
      <div className='row'>
        <div className={bannerWrap}>
          <div className={bannerBig}>
            <Swiper
              className={bannerSwiper}
              centeredSlides={true}
              loop={true}
              effect={'fade'}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
              pagination={{
                clickable: true
              }}
              modules={[Autoplay, Pagination, EffectFade]}
              speed={1000}
            >
              {bannerHome.map((item, index) => (
                <SwiperSlide key={index} className={bannerSwiperItem}>
                  <figure className={bannerImg}>
                    <img src={item.image} alt='' />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={bannerSmall}>
            <div className={bannerSmallItem}>
              <Link to='#'>
                <figure className={bannerImg}>
                  <img src={images.banner_2} alt='' />
                </figure>
              </Link>
            </div>
            <div className={bannerSmallItem}>
              <Link
                to='bestseller'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                <figure className={bannerImg}>
                  <img src={images.banner_3} alt='' />
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
