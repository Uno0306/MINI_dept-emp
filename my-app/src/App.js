import "./App.css";
import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <div>
        <Outlet></Outlet>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
