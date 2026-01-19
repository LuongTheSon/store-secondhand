import React from 'react';
import styles from './styles.module.scss';
import Title from '@components/Title/Title';
import { images } from '@assets/images/assets';
import Subscribe from '@components/Subscribe/Subscribe';

const About = () => {
  const { boxTtl, aboutInfor, aboutImage, aboutText } = styles;
  return (
    <>
      <section>
        <div className='row'>
          <div className={boxTtl}>
            <Title text1={'ABOUT'} text2={'US'} />
          </div>
          <div className={aboutInfor}>
            <figure className={aboutImage}>
              <img src={images.about_img} alt='' />
            </figure>
            <div className={aboutText}>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
              </p>
              <p>
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries,
              </p>
              <p>
                but also the leap into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages
              </p>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default About;
