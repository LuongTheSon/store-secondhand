import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '@/context/ShopContext';
import styles from './styles.module.scss';
import Title from '@components/Title/Title';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import Subscribe from '@components/Subscribe/Subscribe';
import usePagination from '@hook/usePagination';

const ITEMS_PER_PAGE = 9;

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [fillerProduct, setFillerProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const {
    currentData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    setCurrentPage,
    jumpToPage,
    getMiddlePages
  } = usePagination(fillerProduct, ITEMS_PER_PAGE);

  const {
    collectionWrap,
    filters,
    filtersTtl,
    filtersBox,
    filtersBoxName,
    filtersCheckbox,
    product,
    productTop,
    productSelect,
    productList,
    pagination,
    paginationBtn,
    paginationBtnDisable
  } = styles;

  const toogleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toogleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Apply Filters and Sort
  const applyFilterAndSort = () => {
    let productsCopy = [...products];

    // Apply filters
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        productsCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFillerProduct(productsCopy);
    setCurrentPage(1);
  };

  useEffect(() => {
    applyFilterAndSort();
  }, [category, subCategory, search, showSearch, sortType]);

  useEffect(() => {
    setFillerProduct(products);
  }, [products]);

  return (
    <>
      <section>
        <div className='row'>
          <div className={collectionWrap}>
            {/* Filter */}
            <div className={filters}>
              <h3 className={filtersTtl}>FILTERS</h3>
              <div className={filtersBox}>
                <p className={filtersBoxName}>Categories</p>
                <label className={filtersCheckbox} htmlFor='nike'>
                  <input
                    type='checkbox'
                    id='nike'
                    value={'nike'}
                    onChange={toogleCategory}
                  />
                  Nike
                </label>
                <label className={filtersCheckbox} htmlFor='adidas'>
                  <input
                    type='checkbox'
                    id='adidas'
                    value={'adidas'}
                    onChange={toogleCategory}
                  />
                  Adidas
                </label>
                <label className={filtersCheckbox} htmlFor='puma'>
                  <input
                    type='checkbox'
                    id='puma'
                    value={'puma'}
                    onChange={toogleCategory}
                  />
                  Puma
                </label>
                <label className={filtersCheckbox} htmlFor='converse'>
                  <input
                    type='checkbox'
                    id='converse'
                    value={'converse'}
                    onChange={toogleCategory}
                  />
                  Converse
                </label>
                <label className={filtersCheckbox} htmlFor='vans'>
                  <input
                    type='checkbox'
                    id='vans'
                    value={'vans'}
                    onChange={toogleCategory}
                  />
                  Vans
                </label>
              </div>
              <div className={filtersBox}>
                <p className={filtersBoxName}>TYPE</p>
                <label className={filtersCheckbox} htmlFor='highTop'>
                  <input
                    type='checkbox'
                    id='highTop'
                    value={'highTop'}
                    onChange={toogleSubCategory}
                  />
                  High Top
                </label>
                <label className={filtersCheckbox} htmlFor='lowTop'>
                  <input
                    type='checkbox'
                    id='lowTop'
                    value={'lowTop'}
                    onChange={toogleSubCategory}
                  />
                  Low Top
                </label>
                <label className={filtersCheckbox} htmlFor='mule'>
                  <input
                    type='checkbox'
                    id='mule'
                    value={'mule'}
                    onChange={toogleSubCategory}
                  />
                  Mule
                </label>
              </div>
            </div>
            <div className={product}>
              <div className={productTop}>
                <Title text1={'ALL'} text2={'COLLECTIONS'} />

                {/* Sort Product */}
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  className={productSelect}
                >
                  <option value='relavent'>Sort by: Relavent</option>
                  <option value='low-high'>Sort by: Low to High</option>
                  <option value='high-low'>Sort by: High to Low</option>
                </select>
              </div>

              {/* Render Product */}
              <ul className={productList}>
                {currentData?.map((item, index) => (
                  <ItemProduct
                    key={index}
                    id={item._id}
                    title={item.name}
                    image={item.image}
                    price={item.price}
                  />
                ))}
              </ul>

              {/* Pagination */}
              <div className={pagination}>
                <button
                  className={paginationBtn}
                  disabled={currentPage === 1}
                  onClick={prevPage}
                >
                  Prev
                </button>

                <button
                  className={`${paginationBtn} ${
                    currentPage === 1 ? styles.active : ''
                  }`}
                  onClick={() => jumpToPage(1)}
                >
                  1
                </button>

                {currentPage > 3 && (
                  <button className={paginationBtnDisable} disabled>
                    ...
                  </button>
                )}

                {getMiddlePages().map((page) => (
                  <button
                    key={page}
                    className={`${paginationBtn} ${
                      currentPage === page ? styles.active : ''
                    }`}
                    onClick={() => jumpToPage(page)}
                  >
                    {page}
                  </button>
                ))}

                {currentPage < totalPages - 2 && (
                  <button
                    className={`${paginationBtn} ${paginationBtnDisable}`}
                    disabled
                  >
                    ...
                  </button>
                )}

                {totalPages > 1 && (
                  <button
                    className={`${paginationBtn} ${
                      currentPage === totalPages ? 'active' : ''
                    }`}
                    onClick={() => jumpToPage(totalPages)}
                  >
                    {totalPages}
                  </button>
                )}

                <button
                  className={paginationBtn}
                  disabled={currentPage === totalPages}
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default Collection;
