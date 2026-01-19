import React from 'react';
import styles from './styles.module.scss';

const Loading = () => {
  const { loadingContainer, spinner, loadingText } = styles;

  return (
    <div className={loadingContainer}>
      <div className={spinner}></div>
      <p className={loadingText}>Đang tải dữ liệu...</p>
    </div>
  );
};

export default Loading;
