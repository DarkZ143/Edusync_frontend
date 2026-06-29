/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useRouter } from "next/navigation";

import {
    HiOutlineLockClosed,
    HiOutlineArrowRightOnRectangle,
    HiOutlineDevicePhoneMobile,
   
} from "react-icons/hi2";

import StudentLayout from
    "@/components/student/StudentLayout";
import { useEffect, useState } from "react";

export default function StudentSettingsPage() {

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

    const [deviceInfo, setDeviceInfo] =
        useState("");

    useEffect(() => {

        const ua =
            navigator.userAgent;

        let device =
            "Unknown Device";

        if (
            ua.includes("Windows")
        ) {
            device =
                "Windows PC";
        }
        else if (
            ua.includes("Mac")
        ) {
            device =
                "MacBook";
        }
        else if (
            ua.includes("Android")
        ) {
            device =
                "Android Device";
        }
        else if (
            ua.includes("iPhone")
        ) {
            device =
                "iPhone";
        }

        let browser =
            "Browser";

        if (
            ua.includes("Chrome")
        ) {
            browser =
                "Chrome";
        }
        else if (
            ua.includes("Firefox")
        ) {
            browser =
                "Firefox";
        }
        else if (
            ua.includes("Safari")
        ) {
            browser =
                "Safari";
        }

        setDeviceInfo(
            `${device} • ${browser}`
        );

    }, []);

    return (

        <StudentLayout>

            <div className="p-8">

                <div className="mb-8">

                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-white
                        "
                    >
                        Settings
                    </h1>

                    <p
                        className="
                            text-slate-400
                            mt-2
                        "
                    >
                        Manage your account
                    </p>

                </div>

                <div className="space-y-6">

                    {/* Change Password */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900/80
                            p-6
                            hover:border-[#1890C8]
                            transition-all
                        "
                    >

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                "
                            >

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-xl
                                        bg-[#1890C8]/20
                                        flex
                                        items-center
                                        justify-center
                                        text-[#1890C8]
                                    "
                                >
                                    <HiOutlineLockClosed size={24} />
                                </div>

                                <div>

                                    <h2
                                        className="
                                            text-white
                                            font-semibold
                                            text-lg
                                        "
                                    >
                                        Change Password
                                    </h2>

                                    <p
                                        className="
                                            text-slate-400
                                            text-sm
                                        "
                                    >
                                        Update account password
                                    </p>

                                </div>

                            </div>

                            <button
                                onClick={() =>
                                    router.push(
                                        "/student/settings/change-password"
                                    )
                                }
                                className="
                                    px-4
                                    py-2
                                    rounded-xl
                                    bg-[#1890C8]
                                    text-white
                                "
                            >
                                Change
                            </button>

                        </div>

                    </div>

                    {/* Session */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900/80
                            p-6
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-4
                            "
                        >

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-green-500/20
                                    flex
                                    items-center
                                    justify-center
                                    text-green-400
                                "
                            >
                                <HiOutlineDevicePhoneMobile size={24} />
                            </div>

                            <div>

                                <h2
                                    className="
                                        text-white
                                        font-semibold
                                        text-lg
                                    "
                                >
                                    Active Session
                                </h2>

                                <p
                                    className="
        text-slate-400
        text-sm
    "
                                >
                                    {deviceInfo}
                                </p>
                                <p
                                    className="
        text-slate-500
        text-xs
        mt-1
    "
                                >
                                    Logged in on {
                                        new Date().toLocaleString()
                                    }
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Logout */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-red-500/30
                            bg-red-500/10
                            p-6
                        "
                    >

                        <div
                            className="
                                flex
                                justify-between
                                items-center
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                "
                            >

                                <div
                                    className="
                                        w-12
                                        h-12
                                        rounded-xl
                                        bg-red-500/20
                                        flex
                                        items-center
                                        justify-center
                                        text-red-400
                                    "
                                >
                                    <HiOutlineArrowRightOnRectangle size={24} />
                                </div>

                                <div>

                                    <h2
                                        className="
                                            text-white
                                            font-semibold
                                            text-lg
                                        "
                                    >
                                        Logout
                                    </h2>

                                    <p
                                        className="
                                            text-slate-400
                                            text-sm
                                        "
                                    >
                                        Sign out from student portal
                                    </p>

                                </div>

                            </div>

                            <button
                                onClick={handleLogout}
                                className="
                                    px-5
                                    py-2
                                    rounded-xl
                                    bg-red-500
                                    text-white
                                    font-semibold
                                "
                            >
                                Logout
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </StudentLayout>

    );
}