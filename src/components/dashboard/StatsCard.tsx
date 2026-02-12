type StatsCardProps = {
  title: string;
  value: string;
  color: string;
};

export default function StatsCard({ title, value, color }: StatsCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl border shadow-md p-7 hover:shadow-xl transition duration-300">

      <div className={`absolute top-5 right-5 h-3 w-3 rounded-full ${color}`} />

      <p className="text-sm text-slate-500 tracking-wide">
        {title}
      </p>

      <h3 className="text-4xl font-bold mt-4 text-slate-900">
        {value}
      </h3>

      <div className="mt-4 text-xs text-slate-400">
        Updated just now
      </div>

    </div>
  );
}