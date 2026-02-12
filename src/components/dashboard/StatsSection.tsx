import StatsCard from "./StatsCard";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard title="Total Users" value="1,245" />
      <StatsCard title="Active Users" value="1,102" />
      <StatsCard title="Inactive Users" value="143" />
      <StatsCard title="Admins" value="12" />
    </div>
  );
}