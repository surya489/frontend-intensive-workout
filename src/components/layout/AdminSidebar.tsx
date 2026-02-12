export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-[calc(100vh-64px)] p-6">
      <nav className="space-y-4">

        <div className="text-xs uppercase text-gray-400 tracking-wider mb-2">
          Navigation
        </div>

        <div className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold">
          Dashboard
        </div>

        <div className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition cursor-pointer">
          Users
        </div>

        <div className="px-4 py-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition cursor-pointer">
          Settings
        </div>

      </nav>
    </aside>
  );
}