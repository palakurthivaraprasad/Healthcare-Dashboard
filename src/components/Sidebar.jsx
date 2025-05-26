import React from 'react';
import navLinks from '../data/navigation';
import {
  FaHome,
  FaCalendar,
  FaChartBar,
  FaUserMd,
  FaUserInjured,
  FaFilePrescription,
  FaEnvelope,
  FaBell,
  FaMoneyBill,
  FaCog
} from 'react-icons/fa';
import '../styles/components/Sidebar.module.css';

const icons = [
  FaHome,
  FaCalendar,
  FaChartBar,
  FaUserMd,
  FaUserInjured,
  FaFilePrescription,
  FaEnvelope,
  FaBell,
  FaMoneyBill,
  FaCog
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">General</h3>

      <ul className="nav-list">
        {navLinks.slice(0, navLinks.length - 1).map((link, index) => {
          const Icon = icons[index];
          return (
            <li
              key={link}
              className={`nav-item ${link === 'Dashboard' ? 'active-nav-item' : ''}`}
            >
              <Icon className="nav-icon" />
              <span className="nav-text">{link}</span>
            </li>
          );
        })}
      </ul>

      <div className="settings-link">
        <FaCog className="nav-icon" />
        <span className="nav-text">{navLinks[navLinks.length - 1]}</span>
      </div>
    </aside>
  );
}
