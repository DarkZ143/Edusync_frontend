import StudentSidebar from "./StudentSidebar";

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-[#020617]">

            <StudentSidebar />

            <main className="flex-1">
                {children}
            </main>

        </div>
    );
}