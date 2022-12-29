import * as React from "react";
import menuIcon from "../img/icons8-menu.svg";
import { Link } from "react-router-dom";

export function DrawerOpenButton() {
  return (
    <label role="button" htmlFor="my-drawer">
      <img src={menuIcon} className="h-6 w-6" alt="메뉴 열기" />
    </label>
  );
}

function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" hidden />
      {/* drawer-content안에 children을 넣으면 된다. */}
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content mb-0">
          <li>
            <a href="/Mypage">마이 페이지</a>
          </li>
          <li>
            <Link to="/quizs">문제 목록</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
