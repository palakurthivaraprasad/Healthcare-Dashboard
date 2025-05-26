import React from "react";
import "../styles/components/CalendarView.css";

export default function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [
    { day: 27 }, { day: 28 }, { day: 29 }, { day: 30 }, { day: 1 },
    {
      day: 2,
      scheduled: true,
      times: ["10:00 AM", "3:00 PM"]
    },
    { day: 3 }
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">May 2025</div>
      <div className="calendar-days-row">
        {days.map((day) => (
          <div className="calendar-day-name" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-dates-grid">
        {dates.map((date, index) => (
          <div
            className={`calendar-date ${date.scheduled ? "scheduled" : ""}`}
            key={index}
          >
            <div className="date-number">{date.day}</div>
            {date.times && (
              <ul className="time-list">
                {date.times.map((time, i) => (
                  <li className="time-item" key={i}>
                    {time}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div
        className="appointments-scroll"
        style={{ maxHeight: "240px", overflowY: "auto", marginTop: "24px" }}
      >
        <div className="appointments-container">
          <div className="appointment-card">
            <h4>Dentist</h4>
            <p>Dr. Smith</p>
            <p>2:00 PM - 2:30 PM</p>
          </div>
          <div className="appointment-card">
            <h4>Physiotherapy Appointment</h4>
            <p>Dr.Johnson</p>
            <p> 4:00 PM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
