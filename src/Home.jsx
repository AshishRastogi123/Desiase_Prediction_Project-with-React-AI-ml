import React from "react";

export default function Home() {
  return (
    <div className="main-bg d-flex flex-column min-vh-100 w-100">
      <nav className="navbar navbar-expand-lg navbar-custom shadow-sm">
        <div className="container-fluid px-3 px-md-5">
          <a className="navbar-brand logo" href="#">Medicust</a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">HOME</a></li>
              <li className="nav-item"><a className="nav-link" href="#">ABOUT</a></li>
              <li className="nav-item"><a className="nav-link" href="#">DEPARTMENT</a></li>
              <li className="nav-item"><a className="nav-link" href="#">PAGES</a></li>
              <li className="nav-item"><a className="nav-link" href="#">BLOG</a></li>
              <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
            </ul>
          </div>
          <div className="d-flex mt-2 mt-lg-0">
            <button className="btn btn-light text-primary fw-bold fs-6 px-4 py-2 rounded-pill shadow-sm">Login</button>
          </div>
        </div>
      </nav>
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="row w-100 justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 py-5 text-center text-lg-start">
            <h1 className="display-5 display-md-4 fw-bold mb-4 main-title">
              Medical And Health <br />
              <span className="main-highlight">A professional <br />and Friendly care <br />provider.</span>
            </h1>
            <p className="lead main-desc mb-4">Excepteur sint occaecat cupidatat non proident sunt officia</p>
            <a href="#" className="btn btn-primary btn-lg rounded-pill px-5 py-2 main-btn">All appointment</a>
          </div>
        </div>
      </div>
      <footer className="text-center text-white-50 py-3 mt-auto" style={{background: 'rgba(0,0,0,0.2)'}}>© 2025 Medicust. All rights reserved.</footer>
    </div>
  );
}
