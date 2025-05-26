import React from "react";
import healthData from "../data/healthData";
import "../styles/components/HealthStatusCards.css";

export default function HealthStatusCards() {
  return (
    <section className="health-status-cards">
      {healthData.map(({ id, title, progress, emoji, colorClass }) => (
        <div key={id} className={`status-card ${colorClass}`}>
          <span className="emoji">{emoji}</span>
          <h4>{title}</h4>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
              aria-label={`${title} progress: ${progress}%`}
            />
          </div>
          <p>{progress}%</p>
        </div>
      ))}
    </section>
  );
}
