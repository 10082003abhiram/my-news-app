import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            NewsSky📰
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link  class="nav-link" aria-current="page" to="/">
                General
                </Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link" to="/Sports">
                  Sports
                </Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link" to="/Business">
                  Business
                </Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link" to="/Entertainment">
                Entertainment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
