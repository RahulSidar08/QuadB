import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/pages/Header";
import ProductList from "./components/pages/ProductList";
import Cart from "./components/pages/Cart";
import { AddProduct } from "./components/AddProduct";
import { Login } from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const dummyProducts = [
    { id: 1, name: "Shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
  ];

  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="p-6 flex-1">
              <Routes>
                <Route
                  path="/"
                  element={<ProductList propProducts={dummyProducts} />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/add" element={<AddProduct />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
