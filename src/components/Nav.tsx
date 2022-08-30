import * as React from "react";
import "./Nav.css";
import Login from "./Login";
import { DrawerOpenButton } from "./Drawer";

const YELLOW_HEX = "#f5cd2f";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <DrawerOpenButton />
        </li>
      </ul>
      <ul>
        <li>
          <a href="./">
            <strong>Color.list</strong>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="./Login" className="login">
            login
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
