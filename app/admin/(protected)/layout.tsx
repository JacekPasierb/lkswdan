import Sidebar from "@/components/admin/Sidebar";
import Header from "../../../components/admin/Header";


export default function AdminLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Header />
          <main className="mx-auto w-full max-w-6xl p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
