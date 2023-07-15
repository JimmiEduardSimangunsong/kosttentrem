import React, { useEffect } from 'react';
import logo from "../asset/images/logo/logo.png";
import '../style/tailwind.css';

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector('.footer');
    footer.classList.add('fade-in');
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="typography">
          <h3 className="typography-title">Kost Tentrem</h3>
          <p className="typography-description"> Jl. Suka Baru No.18, Padang Bulan Selayang I, Medan Selayang, Sumatera Utara.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
