"use client";

import {
    HiOutlineBell,
    HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

import {useRouter} from "next/navigation";
export default function Navbar() {

    const admin =
        typeof window !== "undefined"
            ? JSON.parse(
                localStorage.getItem("admin") || "{}"
            )
            : {};
    const router = useRouter();

    return (
        <header
            className="
                h-20
                border-b
                border-slate-800
                bg-slate-950
                flex
                items-center
                justify-between
                px-8
            "
        >

            {/* Left */}

            <div className="flex items-center gap-4">

                <h1
                    className="
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    Dashboard
                </h1>

            </div>

            {/* Right */}

            <div className="flex items-center gap-5">

                {/* Search */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        bg-slate-900
                        border
                        border-slate-800
                        rounded-xl
                        px-4
                        py-2
                    "
                >
                    <HiOutlineMagnifyingGlass
                        className="text-slate-400"
                        size={18}
                    />

                    <input
                        placeholder="Search..."
                        className="
                            bg-transparent
                            outline-none
                            text-white
                            placeholder:text-slate-500
                        "
                    />
                </div>

                {/* Notification */}

                <button
                    className="
                        relative
                        p-2
                        rounded-xl
                        bg-slate-900
                        border
                        border-slate-800
                    "
                    onClick={() => router.push("/notifications")}
                >
                    <HiOutlineBell
                        size={22}
                        className="text-white"
                    />

                    <span
                        className="
                            absolute
                            -top-1
                            -right-1
                            w-5
                            h-5
                            rounded-full
                            bg-red-500
                            text-xs
                            flex
                            items-center
                            justify-center
                            text-white
                        "
                    >
                        2
                    </span>
                </button>

                {/* Profile */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >
                    <div
                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-[#1890C8]
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-white
                        "
                    >
                        {admin?.name?.charAt(0) || "A"}
                    </div>

                    <div>

                        <p className="text-white font-medium">
                            {admin?.name || "Admin"}
                        </p>

                        <p
                            className="
                                text-xs
                                text-slate-400
                            "
                        >
                            Super Admin
                        </p>

                    </div>

                </div>

            </div>

        </header>
    );
}