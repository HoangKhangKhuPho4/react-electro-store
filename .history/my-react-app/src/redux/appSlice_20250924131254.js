import { createSlice } from "@reduxjs/toolkit";

// Ví dụ về một slice thông thường (không phải API slice)
const initialState = {
  user: null,
  theme: "light",
  cart: [],
  isLoggedIn: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Action để set user info
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },

    // Action để logout
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.cart = [];
    },

    // Action để thay đổi theme
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },

    // Actions để quản lý cart
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },

    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((cartItem) => cartItem.id === id);

      if (item) {
        if (quantity <= 0) {
          state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Export action creators
export const {
  setUser,
  logout,
  toggleTheme,
  addToCart,
  removeFromCart,
  updateCartQuantity,
  clearCart,
} = appSlice.actions;

// Selector functions
export const selectUser = (state) => state.app.user;
export const selectIsLoggedIn = (state) => state.app.isLoggedIn;
export const selectTheme = (state) => state.app.theme;
export const selectCart = (state) => state.app.cart;
export const selectCartTotal = (state) =>
  state.app.cart.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectCartItemCount = (state) =>
  state.app.cart.reduce((count, item) => count + item.quantity, 0);

export default appSlice.reducer;
