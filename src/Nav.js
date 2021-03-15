import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Nav.css";

function Nav(props) {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={show ? "nav nav__black" : "nav"}>
      <div className="nav__content">
        <img
          onClick={() => history.push("/")}
          alt="logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          className="nav__logo"
        />

        <img
          onClick={() => history.push("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
