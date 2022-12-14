import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className='container-xxl'>        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">
          XPLOID BIKES REPAIR
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Quienes somos? <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                All Posts <span className="sr-only">(current)</span>
              </a>
            </li>

          </ul>
        </div>
      </nav>
      </div>
    );
  }
}
export default Header;