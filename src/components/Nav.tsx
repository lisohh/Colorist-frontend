import React from "react";
import { DrawerOpenButton } from "./Drawer";
import { Link } from "react-router-dom";
import "./Nav.css";

const YELLOW_HEX = "#f5cd2f";

function Nav() {
  return (
    <nav>
      <ul className="flex flex-row justify-between p-2">
        <li>
          <DrawerOpenButton />
        </li>
        <li>
          <Link to="/">
            <strong>Color.list</strong>
          </Link>
        </li>
        <li>
          <Link to="/login" className="login">
            login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
