import React from 'react';
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import OrderManagement from './components/OrderManagement';
import AddProduct from "./pages/addProduct";
import './index.css';

function App() {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    },
    logo: {
      margin: 0,
      fontSize: '20px',
      color: '#111',
      letterSpacing: '0.5px',
    },
    links: {
      display: 'flex',
      gap: '16px',
    },
    link: {
      textDecoration: 'none',
      color: '#2563eb',
      fontWeight: '600',
      fontSize: '16px',
      padding: '6px 10px',
      borderRadius: '8px',
    },
    main: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '24px 16px',
    },
  };

  return (
    <Router>
      <header>
        <nav style={styles.nav}>
          <h2 style={styles.logo}>Shop Admin</h2>
          <div style={styles.links}>
            <NavLink
              to="/orders"
              style={({ isActive }) => ({
                ...styles.link,
                backgroundColor: isActive ? '#e2e8f0' : 'transparent',
                color: isActive ? '#111827' : styles.link.color,
              })}
            >
              Order Management
            </NavLink>
            <NavLink
              to="/add-product"
              style={({ isActive }) => ({
                ...styles.link,
                backgroundColor: isActive ? '#e2e8f0' : 'transparent',
                color: isActive ? '#111827' : styles.link.color,
              })}
            >
              Add Product
            </NavLink>
          </div>
        </nav>
      </header>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<AddProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/orders" element={<OrderManagement />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
