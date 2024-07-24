import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../src/index.css';
import logo from '../assets/logo2.jpeg';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
 <div>
  <h1>
    header
  </h1>
 </div>
  );
}

export default Header;
