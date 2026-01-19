import React from 'react';
import styles from './styles.module.scss';

const Title = ({ text1, text2 }) => {
  const { title, titleSm } = styles;
  return (
    <h2 className={title}>
      <span className={titleSm}>{text1}</span>
      {text2}
    </h2>
  );
};

export default Title;
