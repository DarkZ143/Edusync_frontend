"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

export default function SettingsPage() {
    return (
        <DashboardLayout>

            <div className="p-6">

                {/* Header */}

                <div className="mb-8">

                    <h1
                        className="
                            text-3xl
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
                        Manage your account and system preferences
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-6">

                    {/* Admin Profile */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900/80
                            backdrop-blur-xl
                            p-6
                        "
                    >

                        <h2
                            className="
                                text-xl
                                font-bold
                                text-white
                                mb-5
                            "
                        >
                            Admin Profile
                        </h2>

                        <div className="space-y-4">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="
                                    w-full
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                "
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="
                                    w-full
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                "
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="
                                    w-full
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                "
                            />

                            <button
                                className="
                                    bg-[#1890C8]
                                    px-5
                                    py-3
                                    rounded-xl
                                    text-white
                                    font-medium
                                "
                            >
                                Update Profile
                            </button>

                        </div>

                    </div>

                    {/* Security */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900/80
                            backdrop-blur-xl
                            p-6
                        "
                    >

                        <h2
                            className="
                                text-xl
                                font-bold
                                text-white
                                mb-5
                            "
                        >
                            Security
                        </h2>

                        <div className="space-y-4">

                            <input
                                type="password"
                                placeholder="Current Password"
                                className="
                                    w-full
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                "
                            />

                            <input
                                type="password"
                                placeholder="New Password"
                                className="
                                    w-full
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                "
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="
                                    w-full
                                    bg-slate-800
                                    border
                                    border-slate-700
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-white
                                "
                            />

                            <button
                                className="
                                    bg-yellow-500
                                    px-5
                                    py-3
                                    rounded-xl
                                    text-black
                                    font-semibold
                                "
                            >
                                Change Password
                            </button>

                        </div>

                    </div>

                </div>

                {/* Notification Preferences */}

                <div
                    className="
                        mt-6
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900/80
                        backdrop-blur-xl
                        p-6
                    "
                >

                    <h2
                        className="
                            text-xl
                            font-bold
                            text-white
                            mb-5
                        "
                    >
                        Notification Preferences
                    </h2>

                    <div className="space-y-4">

                        <label className="flex items-center gap-3 text-white">

                            <input type="checkbox" defaultChecked />

                            Student Registrations

                        </label>

                        <label className="flex items-center gap-3 text-white">

                            <input type="checkbox" defaultChecked />

                            Student Updates

                        </label>

                        <label className="flex items-center gap-3 text-white">

                            <input type="checkbox" defaultChecked />

                            System Notifications

                        </label>

                    </div>

                </div>

                {/* System Preferences */}

                <div
                    className="
                        mt-6
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900/80
                        backdrop-blur-xl
                        p-6
                    "
                >

                    <h2
                        className="
                            text-xl
                            font-bold
                            text-white
                            mb-5
                        "
                    >
                        System Preferences
                    </h2>

                    <div className="space-y-4">

                        <label className="flex items-center gap-3 text-white">

                            <input type="checkbox" defaultChecked />

                            Auto Refresh Dashboard

                        </label>

                        <label className="flex items-center gap-3 text-white">

                            <input type="checkbox" defaultChecked />

                            Dark Mode

                        </label>

                    </div>

                </div>

                {/* Danger Zone */}

                <div
                    className="
                        mt-6
                        rounded-3xl
                        border
                        border-red-500/20
                        bg-red-500/5
                        p-6
                    "
                >

                    <h2
                        className="
                            text-xl
                            font-bold
                            text-red-400
                            mb-3
                        "
                    >
                        Danger Zone
                    </h2>

                    <p
                        className="
                            text-slate-400
                            mb-4
                        "
                    >
                        Logout from your admin account.
                    </p>

                    <button
                        className="
                            px-5
                            py-3
                            rounded-xl
                            bg-red-500/20
                            text-red-400
                            hover:bg-red-500/30
                            transition
                        "
                    >
                        Logout
                    </button>

                </div>

            </div>

        </DashboardLayout>
    );
}