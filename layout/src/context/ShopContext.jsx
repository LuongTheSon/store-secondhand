import { createContext, useState } from 'react';
import { products } from '@assets/images/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Create the ShopContext
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState(''); // Search term state
  const [showSearch, setShowSearch] = useState(false); // Control search bar visibility
  const [cartItems, setCartItems] = useState({}); // Cart items state
  const delivery_free = 40000; // Distance cost
  const navigate = useNavigate(); // React Router's navigation hook

  // Format currency to Vietnamese Dong (VNĐ)
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'VNĐ';
  };

  // Add product to the cart
  const addToCart = (cartId, size) => {
    let cartData = structuredClone(cartItems); // Clone the current cart items

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

  // Get total item count in the cart
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

  // Update the quantity of a specific product size in the cart
  const updateCartCount = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
  };

  // Calculate the total amount for all items in the cart
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

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Context value object
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
