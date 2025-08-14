import React, { useState } from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../css/dashboard.css";
import {
  FaUsers, FaTasks, FaUserGraduate, FaHome, FaUser, FaCalendarAlt, FaClipboardList, FaCog
} from "react-icons/fa";
import EmployeeListPage from "./EmployeeListPage";
import avatar from "../assets/avatar.png"
const data = [
  { name: "Jan", value: 80 },
  { name: "Feb", value: 100 },
  { name: "Mar", value: 70 },
  { name: "Apr", value: 90 },
  { name: "May", value: 95 },
  { name: "Jun", value: 85 },
  { name: "Jul", value: 110 },
  { name: "Aug", value: 150 },
  { name: "Sep", value: 90 },
  { name: "Oct", value: 80 },
  { name: "Nov", value: 100 },
  { name: "Dec", value: 95 }
];

export default function Dashboard({ onLogout }) {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="dashboard-wrap d-flex">
      
      <aside className="sidebar p-3">
        <div className="logo mb-4 text-white fw-bold">workflow</div>
        <ul className="nav flex-column gap-3">
          <li onClick={() => setPage("dashboard")} style={{ cursor: "pointer" }}>
            <FaHome /> Dashboard
          </li>
          <li onClick={() => setPage("employees")} style={{ cursor: "pointer" }}>
            <FaUser /> Employees
          </li>
          <li><FaCalendarAlt /> Attendance</li>
          <li><FaClipboardList /> Tasks</li>
          <li><FaCog /> Settings</li>
        </ul>
        <div className="mt-3">
          <button className="btn btn-light w-100" onClick={onLogout}>
            Logout
          </button>
        </div>
        <div className="profile mt-auto d-flex align-items-center gap-2 text-white">
          <img src={avatar} alt="profile" className="rounded-circle" />
          <div>
            <div className="fw-bold">Tom H.</div>
            <small>Project Manager</small>
          </div>
        </div>
      </aside>

      
      <main className="flex-grow-1 p-4">
        {page === "dashboard" && (
          <>
           
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="card stat-card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h4>142</h4>
                      <p className="text-muted mb-0">Total Employees</p>
                      <small className="text-success">↑ 12% from last month</small>
                    </div>
                    <FaUsers size={28} color="#5a5aff" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card stat-card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h4>87</h4>
                      <p className="text-muted mb-0">Active Tasks</p>
                      <small className="text-danger">↓ 3% from last week</small>
                    </div>
                    <FaTasks size={28} color="#ff5a5a" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card stat-card p-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h4>24</h4>
                      <p className="text-muted mb-0">Interns</p>
                      <small className="text-success">↑ 5% from last week</small>
                    </div>
                    <FaUserGraduate size={28} color="#00c853" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-lg-8">
                <div className="card p-3">
                  <h6 className="mb-3">Employee Activity</h6>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={data}>
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8c52ff" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card p-3">
                  <h6 className="mb-3">Attendance Overview</h6>
                  <Calendar />
                </div>
              </div>
            </div>
          </>
        )}

        {page === "employees" && <EmployeeListPage />}
      </main>
    </div>
  );
}
