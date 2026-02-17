import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const moodData = [
  { day: "Mon", mood: 3 },
  { day: "Tue", mood: 4 },
  { day: "Wed", mood: 2 },
  { day: "Thu", mood: 5 },
  { day: "Fri", mood: 4 },
  { day: "Sat", mood: 5 },
  { day: "Sun", mood: 4 },
];

const sessionData = [
  { name: "Chat Sessions", value: 45 },
  { name: "Exercises", value: 30 },
  { name: "Resources", value: 25 },
];

const activityData = [
  { month: "Jan", sessions: 20 },
  { month: "Feb", sessions: 35 },
  { month: "Mar", sessions: 50 },
  { month: "Apr", sessions: 65 },
];

const COLORS = ["#06b6d4", "#22c55e", "#f97316"];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        PsycheGuide AI Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Sessions" value="128" />
        <StatCard title="Mood Improvement" value="+32%" />
        <StatCard title="Active Days" value="24" />
        <StatCard title="Self-Care Tasks" value="18" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Mood Line Chart */}
        <ChartCard title="Weekly Mood Trend">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodData}>
              <XAxis dataKey="day" />
              <YAxis domain={[1, 5]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="mood"
                stroke="#06b6d4"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Activity Bar Chart */}
        <ChartCard title="Monthly Engagement">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sessions" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Usage Pie Chart */}
        <ChartCard title="AI Usage Breakdown">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sessionData}
                dataKey="value"
                nameKey="name"
                outerRadius={110}
                label
              >
                {sessionData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Progress Section */}
        <ChartCard title="Wellness Progress">
          <ul className="space-y-4">
            <ProgressItem label="Anxiety Reduction" value={70} />
            <ProgressItem label="Sleep Quality" value={55} />
            <ProgressItem label="Mindfulness Practice" value={80} />
            <ProgressItem label="Self-Care Consistency" value={65} />
          </ul>
        </ChartCard>
      </div>
    </div>
  );
};

/* ---------------- Components ---------------- */

const StatCard = ({ title, value }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold text-cyan-600 mt-2">{value}</p>
  </div>
);

const ChartCard = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    {children}
  </div>
);

const ProgressItem = ({ label, value }) => (
  <div>
    <div className="flex justify-between mb-1 text-sm text-gray-600">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-cyan-500 h-3 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export default Dashboard;
