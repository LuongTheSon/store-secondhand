import React, { useContext } from 'react';
import { ShopContext } from '@/context/ShopContext';
import { images } from '@assets/images/assets';
import styles from './styles.module.scss';

const Search = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const { searchBar, searchWrap, searchInput, searchClose } = styles;

  return showSearch ? (
    <div className={searchBar}>
      <div className={searchWrap}>
        <div className={searchInput}>
          <input type='text' onChange={(e) => setSearch(e.target.value)} value={search} />
          <img src={images.search_icon} alt='' />
        </div>
        <div className={searchClose} onClick={() => setShowSearch(false)}>
          <img src={images.cross_icon} alt='' />
        </div>
      </div>
    </div>
  ) : null;
};

export default Search;
