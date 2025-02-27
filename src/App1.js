import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import Navbar from './components/Navbar';

import './App.css';

const App = () => (
  <div className="app">
    <nav className="navbar">
      <Navbar />
    </nav>
    <main className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <footer className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Copyright © 2024
          <Link to="/"> Cryptoverse Inc. </Link>
          <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </footer>
    </main>
  </div>
);

export default App;
