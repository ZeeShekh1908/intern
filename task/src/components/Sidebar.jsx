import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiSearch, FiGrid, FiUsers, FiCalendar, FiCheckSquare, FiSettings } from "react-icons/fi";
import { RxCaretDown } from "react-icons/rx";


import Logo from "../assets/Logo.png";
import Avatar from "../assets/avatar.png"; 

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();


  useEffect(() => {
    const mq = window.matchMedia("(max-width: 992px)");
    const set = () => setOpen(!mq.matches ? true : false);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const menu = [
    { to: "/dashboard", icon: <FiGrid />, label: "Dashboard" },
    { to: "/employees", icon: <FiUsers />, label: "Employees" },
    { to: "/attendance", icon: <FiCalendar />, label: "Attendance" },
    { to: "/tasks", icon: <FiCheckSquare />, label: "Tasks" },
    { to: "/settings", icon: <FiSettings />, label: "Settings" },
  ];

  return (
    <aside className={`sidebar ${open ? "open" : "collapsed"}`}>
 
      <div className="sb-header">
        <img src={Logo} alt="workflow" className="sb-logo" />
        <button className="sb-toggle" onClick={() => setOpen(o => !o)} aria-label="Toggle sidebar">
          ☰
        </button>
      </div>

      <div className="sb-search">
        <FiSearch className="sb-search-icon" />
        <input placeholder="Search" />
      </div>

      <nav className="sb-nav">
        {menu.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sb-link ${isActive ? "active" : ""}`
            }
          >
            <span className="sb-ico">{item.icon}</span>
            <span className="sb-text">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sb-profile">
        <img src={Avatar} alt="user" />
        <div className="sb-prof-meta">
          <div className="sb-prof-name">Tom H.</div>
          <div className="sb-prof-role">Project Manager</div>
        </div>
        <RxCaretDown className="sb-caret" />
      </div>
    </aside>
  );
}
