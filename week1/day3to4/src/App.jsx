import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import { Home } from './pages/Home';

const App = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path="/blog/:id" element={<BlogDetail/>} />
      </Routes>
    </Router>
  );
};

export default App;
