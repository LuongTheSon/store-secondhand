import { useState, useEffect } from 'react';

/**
 * Custom hook for pagination
 * @param {Array} data - Static array of items for pagination.
 * @param {number} itemsPerPage - Number of items per page.
 * @param {Function} [fetchData] - Optional function to fetch paginated data dynamically.
 * @returns {Object} Pagination state and handlers.
 */
const usePagination = (data = [], itemsPerPage = 10, fetchData = null) => {
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const [paginatedData, setPaginatedData] = useState([]); // Items for the current page
  const [totalPages, setTotalPages] = useState(1); // Total number of pages

  // Fetch paginated data or calculate from static data
  useEffect(() => {
    const updateData = async () => {
      if (fetchData) {
        try {
          const { items, totalPages: fetchedTotalPages } = await fetchData(
            currentPage,
            itemsPerPage
          );
          setPaginatedData(items || []);
          setTotalPages(fetchedTotalPages || 1);
        } catch (error) {
          console.error('Failed to fetch paginated data:', error);
        }
      } else {
        const start = (currentPage - 1) * itemsPerPage;
        const paginated = data.slice(start, start + itemsPerPage);
        setPaginatedData(paginated);
        setTotalPages(Math.ceil(data.length / itemsPerPage));
      }
    };

    updateData();
  }, [currentPage, data, itemsPerPage, fetchData]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handlers for pagination controls
  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    scrollToTop();
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    scrollToTop();
  };

  const jumpToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    scrollToTop();
  };

  const getMiddlePages = () => {
    const pages = [];
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  // Return all state and handlers
  return {
    currentData: paginatedData,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    jumpToPage,
    setCurrentPage,
    getMiddlePages
  };
};

export default usePagination;
