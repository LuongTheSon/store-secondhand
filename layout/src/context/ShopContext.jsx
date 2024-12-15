import { createContext, useState } from 'react';
import { products } from '@assets/images/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const delivery_free = 40000;
  const navigate = useNavigate();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'VNĐ';
  };

  const addToCart = (cartId, size) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast('Chưa thêm size sản phẩm!');
      return;
    }

    if (!cartData[cartId]) {
      cartData[cartId] = {};
    }

    cartData[cartId][size] = (cartData[cartId][size] || 0) + 1;

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (err) {
          console.error('error cart count:', err);
        }
      }
    }
    return totalCount;
  };

  const updateCartCount = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfor = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfor.price * cartItems[items][item];
          }
        } catch (err) {
          console.error('error cart amount:', err);
        }
      }
    }
    return totalAmount;
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    products,
    formatCurrency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateCartCount,
    getCartAmount,
    delivery_free,
    navigate,
    clearCart
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
