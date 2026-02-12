export default function AdminHeader() {
  return (
    <header className="h-16 bg-white/80 backdrop-blur border-b flex items-center justify-between px-8">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 bg-blue-600 rounded-lg" />
        <h1 className="text-lg font-semibold tracking-tight">
          Team Admin
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-sm text-gray-600 hover:text-black transition">
          Notifications
        </button>

        <div className="h-9 w-9 bg-gray-200 rounded-full border" />
      </div>
    </header>
  );
}