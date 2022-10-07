import * as React from "react";
import "./Nav.css";
import { DrawerOpenButton } from "./Drawer";

const YELLOW_HEX = "#f5cd2f";

function Nav() {
  return (
    <nav>
      <ul className="flex flex-row justify-between p-2">
        <li>
          <DrawerOpenButton />
        </li>
        <li>
          <a href="./">
            <strong>Color.list</strong>
          </a>
        </li>
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
