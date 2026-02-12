export default function AdminHeader() {
    return (
        <header className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-10">
            <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-indigo-600 rounded-xl shadow-md" />
                <h1 className="text-lg font-semibold tracking-tight text-slate-800">
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