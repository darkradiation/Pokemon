import React from "react";
import Navbar_button from "./Navbar_button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://imgs.search.brave.com/6HYMOWEagGiP9RTMs65QrATYoYdW6gfSZjnfOP_qudc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMi9Qb2tl/YmFsbC1QTkctRnJl/ZS1Eb3dubG9hZC5w/bmc"
            alt=""
          />
        </Link>
        <div className="logo">{"<PokeWorld />"}</div>
      </div>
      <div className="Navbar-buttons">
        <Navbar_button
          link="/"
          add="https://imgs.search.brave.com/mSh6K-OCYcZAPxd_cUvJzEjveS0RYO7CpKayxtI-lVU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9t/aXNjZWxsYW5lb3Vz/L2VmZmV2by9ob3Vz/ZS0zOS5wbmc"
        >
          Home
        </Navbar_button>
        <Navbar_button
          link="/searchPage"
          add="https://imgs.search.brave.com/eajkcHZPNak1wkJu6svgISpGFB7TNyJvr2e1NNjBWdc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8zOTg3NzI3LTIw/MC5wbmc"
        >
          Search
        </Navbar_button>
        <Navbar_button
          link="/aboutUs"
          add="https://imgs.search.brave.com/KNcNl4LWjY2iunsimxXkkeRrCIQiGj8JlxFDAGEaBFU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudGhlbm91bnBy/b2plY3QuY29tL3Bu/Zy8zMjY0MzQ2LTIw/MC5wbmc"
        >
          About Us
        </Navbar_button>
      </div>
    </div>
  );
}

export default Navbar;
