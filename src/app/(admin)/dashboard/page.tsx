import StatsSection from "@/components/dashboard/StatsSection";
import SearchBar from "@/components/dashboard/SearchBar";
import UserGrid from "@/components/dashboard/UserGrid";

export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <p className="text-gray-600 mt-1">
          Manage your team and monitor system activity.
        </p>
      </div>

      <StatsSection />

      <SearchBar />

      <UserGrid />
    </section>
  );
}