import * as React from "react";
import "./Nav.css";

const YELLOW_HEX = "#f5cd2f";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#" className="menu">
            <img src="src/img/icons8-menu.svg"></img>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Color.list</strong>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#" className="login">
            login
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
