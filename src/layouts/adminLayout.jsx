import SidebarAdmin from "../components/SidebarAdmin";
import TopbarAdmin from "../components/TopbarAdmin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-white overflow-hidden">
      
      {/* SIDEBAR STATIC */}
      <SidebarAdmin />

      {/* AREA KANAN */}
      <div className="flex-1 flex flex-col bg-white">
        
        {/* FIXED TOPBAR */}
        <TopbarAdmin />

        {/* SCROLLABLE CONTENT */}
        <main
          className="
            flex-1
            w-full max-w-[1500px] mx-auto
            px-10 py-10
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
