import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import Service from "./pages/Service";
import Product from "./pages/Product";
import OrderProduct from "./pages/OrderProduct";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/order-service" element={<Service />} />
        <Route path="/order-product" element={<OrderProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
