export default function SearchBar() {
    return (
        <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">

            <input
                type="text"
                placeholder="Search users..."
                className="w-full sm:w-96 px-5 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition"
            />

            <select className="px-5 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 transition">
                <option value="all">All Roles</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
            </select>

        </div>
    );
}