import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm mb-5 fixed-top p-3 rounded">
  <div className="container">
    <a className="navbar-brand fw-bold text-uppercase" href="/">MN <span className="text-danger fw-bold">Tech Solutions</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <a className="nav-link active fw-bold text-danger" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#about-us">About Us</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#contact-us">Contact Us</a>
        </li>
      </ul>
      <a href="#contact-us"><button type="button" className="btn btn-outline-danger">Contact Me</button></a>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
