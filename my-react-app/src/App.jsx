/**
 * MAIN APP COMPONENT
 *
 * Router setup cho toàn bộ application
 * Admin routes được tách biệt khỏi User routes
 */

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Layout Components
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

// User Pages
import ShoppingCart from "./components/Cart/ShoppingCart.jsx";
import ProductDetail from "./components/Product-Details";
import About from "./pages/About";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/register.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OrderHistoryPage from "./pages/Order-Management/OrderHistoryPage.jsx";
import Shop from "./pages/Shop";
import ProfilePage from "./pages/UserProfile/ProfilePage.jsx";
import Wishlist from "./pages/Wishlist/Wishlist";

// Admin Pages
import AnalyticsPage from "./pages/Admin-Analytics/AnalyticsPage.jsx";
import BannerManagementPage from "./pages/Admin-Banner/BannerManagementPage.jsx";
import CategoryManagementPage from "./pages/Admin-Categories/CategoryManagementPage.jsx";
import CustomerManagementPage from "./pages/Admin-Customers/CustomerManagementPage.jsx";
import DashboardPage from "./pages/Admin-Dashboard/DashboardPage.jsx";
import InventoryManagementPage from "./pages/Admin-Inventory/InventoryManagementPage.jsx";
import OrderManagementPage from "./pages/Admin-Orders/OrderManagementPage.jsx";
import PostManagementPage from "./pages/Admin-Posts/PostManagementPage.jsx";
import ProductManagementPage from "./pages/Admin-Products/ProductManagementPage.jsx";

// Redux
import { Provider } from "react-redux";
import AppSliceDemo from "./components/AppSliceDemo";
import RTKQueryDemo from "./components/RTKQueryDemo";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <Routes>
                  <Route index element={<DashboardPage />} />
                  <Route path="products" element={<ProductManagementPage />} />
                  <Route
                    path="categories"
                    element={<CategoryManagementPage />}
                  />
                  <Route path="orders" element={<OrderManagementPage />} />
                  <Route
                    path="inventory"
                    element={<InventoryManagementPage />}
                  />
                  <Route
                    path="customers"
                    element={<CustomerManagementPage />}
                  />
                  <Route path="banners" element={<BannerManagementPage />} />
                  <Route path="posts" element={<PostManagementPage />} />
                  <Route path="analytics" element={<AnalyticsPage />} />
                  <Route
                    path="settings"
                    element={<div>Admin Settings Page</div>}
                  />
                </Routes>
              }
            />

            {/* User Routes - With Header/Footer/Navigation */}
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Navigation />
                  <main className="main-content">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/product/:id" element={<ProductDetail />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/cart" element={<ShoppingCart />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/wishlist" element={<Wishlist />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/checkout" element={<Checkout />} />
                      <Route path="/profile" element={<ProfilePage />} />
                      <Route
                        path="/user/orders"
                        element={<OrderHistoryPage />}
                      />
                      <Route path="/rtk-demo" element={<RTKQueryDemo />} />
                      <Route
                        path="/app-slice-demo"
                        element={<AppSliceDemo />}
                      />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
