export default function UserCard() {
    return (
        <div className="bg-white rounded-2xl border shadow-sm p-6 flex justify-between items-center hover:shadow-lg hover:-translate-y-1 transition duration-300">

            <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full" />

                <div>
                    <h4 className="font-semibold tracking-tight">
                        John Doe
                    </h4>
                    <p className="text-sm text-gray-500">
                        john@example.com
                    </p>
                </div>
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-600 font-medium">
                Active
            </span>
        </div>
    );
}