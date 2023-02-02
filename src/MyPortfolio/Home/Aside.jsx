import React from "react";
import "./Profile.css";

const Aside = () => {
  return (
    <div className="aside">
      <ul>
        <li>
          <a href="https://www.instagram.com/_rv__sharma_/" target='_blank'>
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ravi-sharma01/" target='_blank'>
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/ravisharma607" target='_blank'>
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
