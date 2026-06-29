"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    HiOutlineHome,
    HiOutlineUsers,
    HiOutlineBell,
    HiOutlineClipboardDocumentList,
    HiOutlineCog6Tooth,
    HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

import { logoutAdmin } from "@/services/admin.service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";



const menuItems = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: HiOutlineHome,
    },
    {
        title: "Students",
        href: "/students",
        icon: HiOutlineUsers,
    },
    {
        title: "Notifications",
        href: "/notifications",
        icon: HiOutlineBell,
    },
    {
        title: "Activity Logs",
        href: "/activity",
        icon: HiOutlineClipboardDocumentList,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: HiOutlineCog6Tooth,
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {

            await logoutAdmin();

        } catch (error) {

            console.error(error);

        } finally {

            localStorage.removeItem("token");

            toast.success(
                "Logged out successfully"
            );

            router.push("/login");
        }
    };

    return (
        <aside
            className="
                w-72
                min-h-screen
                bg-slate-950
                border-r
                border-slate-800
                text-white
                flex
                flex-col
            "
        >
            {/* Logo */}

            <div className="p-6 border-b border-slate-800">
                <h1
                    className="
                        text-3xl
                        font-bold
                        text-[#1890C8]
                    "
                >
                    EduSync
                </h1>

                <p className="text-slate-400 text-sm mt-1">
                    Student Management System
                </p>
            </div>

            {/* Navigation */}

            <nav className="flex-1 p-4">
                <div className="space-y-2">

                    {menuItems.map((item) => {

                        const Icon = item.icon;

                        const active =
                            pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    flex
                                    items-center
                                    gap-3
                                    px-4
                                    py-3
                                    rounded-xl
                                    transition-all
                                    duration-200

                                    ${active
                                        ? "bg-[#1890C8] text-white shadow-lg"
                                        : "text-slate-300 hover:bg-slate-900"
                                    }
                                `}
                            >
                                <Icon size={22} />

                                <span className="font-medium">
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}

                </div>
            </nav>

            {/* Admin Section */}

            <div className="border-t border-slate-800 p-5">

                <div className="mb-4">
                    <p className="font-semibold">
                        Rahul Kumar
                    </p>

                    <p className="text-sm text-slate-400">
                        Super Admin
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="
                        flex
                        items-center
                        gap-2
                        text-red-400
                        hover:text-red-300
                        transition-colors
                    "
                >
                    <HiOutlineArrowRightOnRectangle size={20} />

                    <span>
                        Logout
                    </span>
                </button>

            </div>
        </aside>
    );
}