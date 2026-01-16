import React from "react";
import "../dashboard.css";

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <ul className="sidebar-menu">
        <li
          className={`sidebar-item ${
            activePage === "course" ? "active" : ""
          }`}
          onClick={() => setActivePage("course")}
        >
          Course
        </li>

        <li
          className={`sidebar-item ${
            activePage === "parent" ? "active" : ""
          }`}
          onClick={() => setActivePage("parent")}
        >
          NameChange
        </li>

        <li
          className={`sidebar-item ${
            activePage === "page" ? "active" : ""
          }`}
          onClick={() => setActivePage("page")}
        >
         Page
        </li>

        <li
          className={`sidebar-item ${
            activePage === "calculator" ? "active" : ""
          }`}
          onClick={() => setActivePage("calculator")}
        >
          Calculator
        </li>
      </ul>
    </aside>
  );
}
