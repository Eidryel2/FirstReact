import React from 'react';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark fixed-top navbar-dark">
      <div className="container">
        <a className="navbar-brand text-warning" href="#topo">AKIIOSHO YO</a>
        <button
          className="navbar-toggler navbar-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link text-warning" href="#topo">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#produtos">Nossos Produtos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#somos">Quem Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-warning" href="#time">Nosso Time</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;