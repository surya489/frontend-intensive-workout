import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-100">
            <AdminHeader />

            <div className="flex">
                <AdminSidebar />

                <main className="flex-1 p-10">
                    <div className="bg-white rounded-3xl shadow-lg p-10 space-y-12">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}