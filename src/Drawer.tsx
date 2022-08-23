import * as React from "react";
import "./Nav.css";

export function DrawerOpenButton() {
  return (
    <label role="button" htmlFor="my-drawer" className="drawer-button">
      <img src="src/img/icons8-menu.svg"></img>
    </label>
  );
}

function Drawer({ children }) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* drawer-content안에 children을 넣으면 된다. */}
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content mb-0">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
