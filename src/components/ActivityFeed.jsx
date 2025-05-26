import React from "react";
import "../styles/components/ActivityFeed.css";

const weeklyActivity = [
  { day: "Mon", count: 2 },
  { day: "Tue", count: 3 },
  { day: "Wed", count: 1 },
  { day: "Thu", count: 4 },
  { day: "Fri", count: 2 },
  { day: "Sat", count: 0 },
  { day: "Sun", count: 1 },
  { day: "Mon", count: 3 },
  { day: "Tue", count: 1 },
  { day: "Wed", count: 4 },
  { day: "Thu", count: 2 },
  { day: "Fri", count: 3 },
  { day: "Sat", count: 2 },
  { day: "Sun", count: 0 }
];

export default function ActivityFeed() {
  const totalAppointments = weeklyActivity.reduce((sum, item) => sum + item.count, 0);

  return (
    <section className="activity-feed">
      <h3 className="activity-title">Activity Feed</h3>
      <p className="activity-summary">You had {totalAppointments} appointments in the last 2 weeks</p>

      <div className="activity-bar-chart">
        {weeklyActivity.map((item, index) => (
          <div key={index} className="bar-group">
            <div
              className={`bar ${item.count === 0 ? 'bar-empty' : ''}`}
              style={{ height: `${item.count * 20}px` }}
              title={`${item.day}: ${item.count} appointment${item.count !== 1 ? 's' : ''}`}
            ></div>
            <div className="bar-day">{item.day}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
