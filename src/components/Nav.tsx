import * as React from "react";
import { DrawerOpenButton } from "./Drawer";
import { Link } from "react-router-dom";

const YELLOW_HEX = "#f5cd2f";
const logoFont = "'DM Sans', sans-serif";

function Nav() {
  return (
    <nav>
      <ul className="flex flex-row justify-between p-2">
        <li>
          <DrawerOpenButton />
        </li>
        <li>
          <Link to="/">
            <strong style={{ font: `${logoFont}` }}>Color.list</strong>
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
