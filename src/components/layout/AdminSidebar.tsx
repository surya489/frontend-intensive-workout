export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r min-h-[calc(100vh-64px)] p-4">
      <nav className="space-y-3">
        <div className="p-2 rounded-lg bg-gray-100 font-medium">
          Dashboard
        </div>

        <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          Users
        </div>

        <div className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          Settings
        </div>
      </nav>
    </aside>
  );
}