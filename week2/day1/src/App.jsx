import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { HeadsetsGrid } from "./components/HeadsetsGrid";
import { Testimonials } from "./components/Testimonials";
import { CompanyValues } from "./components/CompanyValues";

function App() {
  return (
    <Router>
      <div className="bg-[#0e0218] text-white min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
              </div>
            }
          />
          <Route
            path="/company"
            element={
              <div>
                <Company />
                <HeadsetsGrid />
                <Testimonials />
                <CompanyValues />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
