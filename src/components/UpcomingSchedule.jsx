import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";
import scheduleData from "../data/schedule";
import "../styles/components/UpcomingSchedule.css";

export default function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {scheduleData.map(({ day, appointments }) => (
        <div key={day} className="schedule-day-block">
          <h4>On {day}</h4>
          {appointments.map(({ id, title, time, icon }) => (
            <SimpleAppointmentCard
              key={id}
              title={title}
              time={time}
              icon={icon}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
