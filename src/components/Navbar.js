import React, { useEffect, useState } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.screenY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={show ? "navbar__black" : "navbar"}>
      <img
        className="navbar__logo"
        src="https://imgs.search.brave.com/d-5QHv0OKNqEzCa8jz0i5B7D_tka_hq1VpvjawK5yzI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbmV0ZmxpeC9u/ZXRmbGl4X1BORzI1/LnBuZw"
        alt=""
      />

      <img
        className="navbar__profile"
        src="https://imgs.search.brave.com/frBEOu46ljCkmIfrVhlf4cEKHVFje2pcclvXTpjcLA0/rs:fit:792:792:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZmL2Ew/LzlhL2ZmYTA5YWVj/NDEyZGIzZjU0ZGVh/ZGYxYjM3ODFkZTJh/LnBuZw"
        alt=""
      />
    </div>
  );
}

export default Navbar;
