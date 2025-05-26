import { Activity, HeartPulse, CalendarCheck } from "lucide-react";

export default function DashboardOverview() {
  return (
    <section className="p-6 bg-gray-50 rounded-2xl shadow-sm space-y-6" aria-label="Dashboard overview section">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-white rounded-xl shadow p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          role="region"
          aria-label="Heart rate overview"
        >
          <HeartPulse className="text-red-500 w-6 h-6" aria-hidden="true" />
          <div>
            <p className="text-gray-600">Heart Rate</p>
            <p className="text-lg font-bold">78 bpm</p>
          </div>
        </div>
        <div
          className="bg-white rounded-xl shadow p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          role="region"
          aria-label="Upcoming appointments"
        >
          <CalendarCheck className="text-blue-500 w-6 h-6" aria-hidden="true" />
          <div>
            <p className="text-gray-600">Upcoming Appointments</p>
            <p className="text-lg font-bold">3 this week</p>
          </div>
        </div>
        <div
          className="bg-white rounded-xl shadow p-4 flex items-center gap-4 hover:shadow-md transition-shadow"
          role="region"
          aria-label="Activity level overview"
        >
          <Activity className="text-green-500 w-6 h-6" aria-hidden="true" />
          <div>
            <p className="text-gray-600">Activity Level</p>
            <p className="text-lg font-bold">High</p>
          </div>
        </div>
      </div>
    </section>
  );
}
