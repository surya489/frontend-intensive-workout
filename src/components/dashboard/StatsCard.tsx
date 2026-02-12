type StatsCardProps = {
  title: string;
  value: string;
};

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
    </div>
  );
}