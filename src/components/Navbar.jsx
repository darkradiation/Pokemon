import React from "react";
import Navbar_button from "./Navbar_button";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src="https://imgs.search.brave.com/6HYMOWEagGiP9RTMs65QrATYoYdW6gfSZjnfOP_qudc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMi9Qb2tl/YmFsbC1QTkctRnJl/ZS1Eb3dubG9hZC5w/bmc"
          alt=""
        />
        <div className="logo">{"<PokeWorld />"}</div>
      </div>
      <div className="Navbar-buttons">
        <Navbar_button
          link="/"
          add="https://imgs.search.brave.com/hFJc3HL6bnsSNwqxE9PPIm0304uD-mQ8vTnnt-jrc0E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kM3N4/c2htbmNzMTB0ZS5j/bG91ZGZyb250Lm5l/dC9pY29uL3ByZW1p/dW0vcG5nLTEyOC8x/NzEyNjk0LnBuZz90/b2tlbj1leUpoYkdj/aU9pSm9jekkxTmlJ/c0ltdHBaQ0k2SW1S/bFptRjFiSFFpZlFf/Xy5leUpwYzNNaU9p/SmtNM040YzJodGJt/TnpNVEIwWlM1amJH/OTFaR1p5YjI1MExt/NWxkQ0lzSW1WNGND/STZNVGN3TmpJd056/azBOU3dpY1NJNmJu/VnNiQ3dpYVdGMElq/b3hOekExT1RRNE56/UTFmUV9fLjc0ZTU1/Mjk4MjYyNDYyNjU1/N2U1ZGFjNGUzNTYw/MTc3YzI2Mjg0ZmFk/ZTU3NDBmMzc2Y2U0/MWZiMGRiOTdlZDE"
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
        {/* <Navbar_button link="/newHome">Home</Navbar_button> */}
      </div>
    </div>
  );
}

export default Navbar;
