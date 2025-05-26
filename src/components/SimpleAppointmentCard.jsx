import React from "react";
import "../styles/components/SimpleAppointmentCard.css";

export default function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="appointment-card">
      <span className="appointment-icon">{icon}</span>
      <div className="appointment-details">
        <h5>{title}</h5>
        <p>{time}</p>
      </div>
    </div>
  );
}
