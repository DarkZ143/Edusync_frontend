"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineClock,
    HiOutlineCog6Tooth,
    HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

export default function StudentSidebar() {

    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {

        localStorage.removeItem(
            "student"
        );

        localStorage.removeItem(
            "student_token"
        );

        router.push(
            "/student/login"
        );

    };

    const menu = [
        {
            label: "Dashboard",
            href: "/student/dashboard",
            icon: <HiOutlineHome size={20} />,
        },
        {
            label: "Profile",
            href: "/student/profile",
            icon: <HiOutlineUser size={20} />,
        },
        {
            label: "Activity",
            href: "/student/activity",
            icon: <HiOutlineClock size={20} />,
        },
        {
            label: "Settings",
            href: "/student/settings",
            icon: <HiOutlineCog6Tooth size={20} />,
        },
    ];

    return (
        <aside
            className="
                w-72
                min-h-screen
                bg-slate-900
                border-r
                border-slate-800
                p-6
            "
        >

            {/* Logo */}

            <div className="mb-10">

                <h1
                    className="
                        text-3xl
                        font-black
                    "
                >

                    <span className="text-[#1890C8]">
                        Edu
                    </span>

                    <span className="text-white">
                        Sync
                    </span>

                </h1>

                <p
                    className="
                        text-slate-500
                        text-sm
                        mt-2
                    "
                >
                    Student Portal
                </p>

            </div>

            {/* Menu */}

            <nav className="space-y-2">

                {menu.map((item) => (

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
                            transition

                            ${pathname === item.href
                                ? `
                                        bg-[#1890C8]/20
                                        text-[#1890C8]
                                    `
                                : `
                                        text-slate-300
                                        hover:bg-slate-800
                                    `
                            }
                        `}
                    >
                        {item.icon}

                        {item.label}
                    </Link>

                ))}

            </nav>

            {/* Logout */}

            <button
                onClick={handleLogout}
                className="
                    mt-10
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    bg-red-500/10
                    text-red-400
                    hover:bg-red-500/20
                "
            >

                <HiOutlineArrowRightOnRectangle
                    size={20}
                />

                Logout

            </button>

        </aside>
    );
}