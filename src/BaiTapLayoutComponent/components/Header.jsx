import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container px-lg-5">
        <a className="navbar-brand" href="/">
          Start Bootstrap
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}
