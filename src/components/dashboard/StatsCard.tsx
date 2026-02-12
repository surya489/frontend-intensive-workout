type StatsCardProps = {
  title: string;
  value: string;
  color: string;
};

export default function StatsCard({ title, value, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-md transition">
        <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">{title}</p>
            <div className={`h-8 w-8 rounded-lg ${color}`} />
        </div>

        <h3 className="text-3xl font-semibold mt-4 tracking-tight text-slate-800">
            {value}
        </h3>
    </div>
  );
}