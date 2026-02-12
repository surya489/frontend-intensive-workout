

export default function AdminHeader () {
    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm">
            <h1 className="text-lg font-semibold">
                Team Admin Portal
            </h1>
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    Admin
                </span>
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>
        </header>
    )
}