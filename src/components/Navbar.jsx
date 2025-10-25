import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="main">
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">
              Medicust
            </a>

            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    DEPARTMENT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PAGES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex">
              <button className="btn btn-light text-primary fw-bold fs-6 fs-sm-5 fs-md-4 fs-lg-3 fs-xl-2">
                Login
              </button>
            </div>
          </div>
        </nav>

        <div className="container text-start content">
          <div className="row">
            <div className="col-md-8">
              <h4>
                Medical And Health <br />
                <span>
                  A professional <br />
                  and Friendly care <br />
                  provider.
                </span>
              </h4>
              <p className="par">
                Excepteur sint occaecat cupidatat non proident sunt officia
              </p>
              <a href="#" className="cn">
                All appointment
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light text-primary text-center fw-bold p-3 rounded">
        <p>
          Need a Doctor for Checkup! <br /> Contact US with Emergency Number !
        </p>
      </div>
    </>
  );
}

export default Navbar;
