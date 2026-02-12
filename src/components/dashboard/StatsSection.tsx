import StatsCard from "./StatsCard";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        <StatsCard title="Total Users" value="1,245" color="bg-indigo-500" />
        <StatsCard title="Active Users" value="1,102" color="bg-emerald-500" />
        <StatsCard title="Inactive Users" value="143" color="bg-rose-500" />
        <StatsCard title="Admins" value="12" color="bg-amber-500" />
    </div>
  );
}