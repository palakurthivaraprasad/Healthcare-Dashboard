import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../styles/components/DashboardMainContent.css";

export default function DashboardMainContent() {
  return (
    <main className="dashboard-main-content">
      <div>
        <h3 className="dashboard-title">Dashboard</h3>
      </div>
      <div className="first-section">
        <div><AnatomySection />
        <ActivityFeed /></div>
        <div className="second-section">
        <HealthStatusCards />
        </div>
        <div className="col-sec">
          <CalendarView />
        <UpcomingSchedule />
        </div>
      </div>
    
    
    </main>
  );
}
