import React from "react";
import { Link, Outlet } from "react-router-dom";
import syles from "./style.css";

export default function NavBar() {
  return (
    <div>
      <ul className={syles.list}>
        <li className={syles.item}>
          <Link to="/"> home</Link>
        </li>
        <li className={syles.item}>
          <Link to="/empresa"> empresa</Link>
        </li>
        <li className={syles.item}>
          <Link to="/contato"> contato</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
