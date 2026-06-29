/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import {
    HiOutlineAcademicCap,
    HiOutlineIdentification,
    HiOutlineCheckBadge,
    HiOutlineUserCircle,
    HiOutlineCog6Tooth,
    HiOutlineUser,
    HiOutlineClock,

} from "react-icons/hi2";
import StudentLayout from
    "@/components/student/StudentLayout";
import Link from "next/link";

export default function StudentDashboardPage() {

    const [student, setStudent] =
        useState<any>(null);
    const [activities, setActivities] = useState<any[]>([]);
    const [showActivity, setShowActivity] = useState(false);

    useEffect(() => {

        const data =
            localStorage.getItem(
                "student"
            );

        if (data) {

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStudent(
                JSON.parse(data)
            );

        }

        const studentData =
            JSON.parse(
                localStorage.getItem(
                    "student"
                ) || "{}"
            );

        if (studentData?.id) {

            fetch(
                `http://127.0.0.1:8000/api/students/${studentData.id}/activity`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${localStorage.getItem(
                                "student_token"
                            )}`,
                    },
                }
            )
                .then((res) => res.text())
                .then((data) => {
                    console.log(data);
                });
        }

    }, []);

    if (!student) {

        return (
            <div
                className="
                    min-h-screen
                    bg-[#020617]
                    flex
                    items-center
                    justify-center
                    text-white
                "
            >
                Loading...
            </div>
        );

    }

    const completion =
        [
            student.phone,
            student.gender,
            student.dob,
            student.address,
            student.city,
            student.state,
            student.country,
        ].filter(Boolean).length;

    const profileCompletion =
        Math.round(
            (completion / 7) * 100
        );

    return (
        <StudentLayout>
            <div
                className="
                min-h-screen
                bg-[#020617]
                p-8
            "
            >

                {/* Header */}

                <div className="mb-8">

                    <h1
                        className="
                        text-4xl
                        font-bold
                        text-white
                    "
                    >
                        Welcome,
                        {" "}
                        {student.first_name}
                    </h1>

                    <p
                        className="
                        text-slate-400
                        mt-2
                    "
                    >
                        Student Dashboard
                    </p>

                </div>

                {/* Stats */}

                <div
                    className="
                    grid
                    md:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                "
                >

                    {/* Student ID */}

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
                            justify-between
                            items-center
                        "
                        >

                            <div>

                                <p
                                    className="
                                    text-slate-400
                                "
                                >
                                    Student ID
                                </p>

                                <h2
                                    className="
                                    text-xl
                                    font-bold
                                    text-white
                                    mt-2
                                "
                                >
                                    {
                                        student.student_id
                                    }
                                </h2>

                            </div>

                            <HiOutlineIdentification
                                size={28}
                                className="
                                text-[#1890C8]
                            "
                            />

                        </div>

                    </div>

                    {/* Course */}

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
                            justify-between
                            items-center
                        "
                        >

                            <div>

                                <p
                                    className="
                                    text-slate-400
                                "
                                >
                                    Course
                                </p>

                                <h2
                                    className="
                                    text-xl
                                    font-bold
                                    text-white
                                    mt-2
                                "
                                >
                                    {
                                        student.course ||
                                        "N/A"
                                    }
                                </h2>

                            </div>

                            <HiOutlineAcademicCap
                                size={28}
                                className="
                                text-[#1890C8]
                            "
                            />

                        </div>

                    </div>

                    {/* Status */}

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
                            justify-between
                            items-center
                        "
                        >

                            <div>

                                <p
                                    className="
                                    text-slate-400
                                "
                                >
                                    Status
                                </p>

                                <h2
                                    className="
                                    text-xl
                                    font-bold
                                    mt-2
                                    text-green-400
                                "
                                >
                                    {
                                        student.is_active
                                            ? "Active"
                                            : "Inactive"
                                    }
                                </h2>

                            </div>

                            <HiOutlineCheckBadge
                                size={28}
                                className="
                                text-green-400
                            "
                            />

                        </div>

                    </div>

                    {/* Completion */}

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
                            justify-between
                            items-center
                        "
                        >

                            <div>

                                <p
                                    className="
                                    text-slate-400
                                "
                                >
                                    Profile
                                </p>

                                <div className="mt-3">

                                    <h2
                                        className="
            text-2xl
            font-bold
            text-white
        "
                                    >
                                        {profileCompletion}%
                                    </h2>

                                    <div
                                        className="
            w-full
            h-2
            bg-slate-700
            rounded-full
            mt-3
        "
                                    >

                                        <div
                                            className="
                h-2
                rounded-full
                bg-[#1890C8]
            "
                                            style={{
                                                width: `${profileCompletion}%`,
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>

                            <HiOutlineUserCircle
                                size={28}
                                className="
                                text-[#1890C8]
                            "
                            />

                        </div>

                    </div>

                </div>

                {/* Profile Summary */}

                <div
                    className="
                    mt-8
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900/80
                    p-6
                "
                >

                    <h2
                        className="
                        text-2xl
                        font-bold
                        text-white
                        mb-6
                    "
                    >
                        Profile Summary
                    </h2>

                    <div
                        className="
                         grid
        lg:grid-cols-2
        gap-6
        mt-8
                    "
                    >

                        <div>

                            <p className="text-slate-400">
                                Full Name
                            </p>

                            <p className="text-white">
                                {student.first_name}
                                {" "}
                                {student.last_name}
                            </p>

                        </div>

                        <div>

                            <p className="text-slate-400">
                                Email
                            </p>

                            <p className="text-white">
                                {student.email}
                            </p>

                        </div>

                        <div>

                            <p className="text-slate-400">
                                Phone
                            </p>

                            <p className="text-white">
                                {
                                    student.phone ||
                                    "N/A"
                                }
                            </p>

                        </div>

                        <div>

                            <p className="text-slate-400">
                                Country
                            </p>

                            <p className="text-white">
                                {
                                    student.country ||
                                    "N/A"
                                }
                            </p>

                        </div>

                    </div>

                </div>

                {/* Activities */}
                <div
                    className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/80
        p-6
        mt-8
    "
                >

                    <div
                        className="
            flex
            items-center
            justify-between
        "
                    >

                        <div>

                            <h2
                                className="
                    text-xl
                    font-bold
                    text-white
                "
                            >
                                Recent Activity
                            </h2>

                            <p
                                className="
                    text-slate-400
                    mt-2
                "
                            >
                                {
                                    activities.length > 0
                                        ? "Activity detected"
                                        : "No recent activity"
                                }
                            </p>

                        </div>

                        <div
                            className="
                flex
                items-center
                gap-4
            "
                        >

                            {activities.length > 0 ? (

                                <div
                                    className="
                        flex
                        items-center
                        gap-2
                        text-green-400
                    "
                                >

                                    ✓

                                    <span>
                                        {
                                            activities.length
                                        }
                                    </span>

                                </div>

                            ) : (

                                <div
                                    className="
                        text-red-400
                    "
                                >
                                    ✕
                                </div>

                            )}

                            <Link
                                href="/student/activity"
                                className="
        px-4
        py-2
        rounded-xl
        bg-[#1890C8]
        text-white
    "
                            >
                                View Activity
                            </Link>

                        </div>

                    </div>

                </div>

                {
                    showActivity && (

                        <div
                            className="
                fixed
                inset-0
                bg-black/70
                flex
                items-center
                justify-center
                z-50
            "
                        >

                            <div
                                className="
                    w-full
                    max-w-2xl
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-6
                    max-h-[80vh]
                    overflow-y-auto
                "
                            >

                                <div
                                    className="
                        flex
                        justify-between
                        items-center
                        mb-6
                    "
                                >

                                    <h2
                                        className="
                            text-2xl
                            font-bold
                            text-white
                        "
                                    >
                                        Recent Activity
                                    </h2>

                                    <button
                                        onClick={() =>
                                            setShowActivity(false)
                                        }
                                        className="
                            text-slate-400
                            hover:text-white
                        "
                                    >
                                        ✕
                                    </button>

                                </div>

                                <div className="space-y-4">

                                    {activities.map(
                                        (activity) => (

                                            <div
                                                key={activity.id}
                                                className="
                                    border-l-2
                                    border-[#1890C8]
                                    pl-4
                                "
                                            >

                                                <h3
                                                    className="
                                        text-white
                                        font-medium
                                    "
                                                >
                                                    {
                                                        activity.changed_field
                                                    }
                                                    {" "}
                                                    Updated
                                                </h3>

                                                <p
                                                    className="
                                        text-slate-400
                                        text-sm
                                    "
                                                >
                                                    {
                                                        activity.old_value
                                                    }
                                                    {" → "}
                                                    {
                                                        activity.new_value
                                                    }
                                                </p>

                                                <p
                                                    className="
                                        text-xs
                                        text-slate-500
                                        mt-2
                                    "
                                                >
                                                    {
                                                        new Date(
                                                            activity.changed_at
                                                        ).toLocaleString()
                                                    }
                                                </p>

                                            </div>

                                        )
                                    )}

                                </div>

                            </div>

                        </div>

                    )
                }


                <div className="mt-8">

                    <h2
                        className="
            text-2xl
            font-bold
            text-white
            mb-4
        "
                    >
                        Quick Actions
                    </h2>

                    <div
                        className="
            grid
            md:grid-cols-3
            gap-5
        "
                    >

                        <Link
                            href="/student/profile"
                            className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/80
                p-6
                hover:border-[#1890C8]
                transition-all
                hover:-translate-y-1
            "
                        >

                            <HiOutlineUser
                                size={32}
                                className="text-[#1890C8]"
                            />

                            <h3
                                className="
                    text-white
                    font-semibold
                    mt-4
                "
                            >
                                Edit Profile
                            </h3>

                            <p
                                className="
                    text-slate-400
                    text-sm
                    mt-2
                "
                            >
                                Manage your personal information
                            </p>

                        </Link>

                        <Link
                            href="/student/activity"
                            className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/80
                p-6
                hover:border-[#1890C8]
                transition-all
                hover:-translate-y-1
            "
                        >

                            <HiOutlineClock
                                size={32}
                                className="text-[#1890C8]"
                            />

                            <h3
                                className="
                    text-white
                    font-semibold
                    mt-4
                "
                            >
                                Activity Timeline
                            </h3>

                            <p
                                className="
                    text-slate-400
                    text-sm
                    mt-2
                "
                            >
                                View all profile changes
                            </p>

                        </Link>

                        <Link
                            href="/student/settings"
                            className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/80
                p-6
                hover:border-[#1890C8]
                transition-all
                hover:-translate-y-1
            "
                        >

                            <HiOutlineCog6Tooth
                                size={32}
                                className="text-[#1890C8]"
                            />

                            <h3
                                className="
                    text-white
                    font-semibold
                    mt-4
                "
                            >
                                Account Settings
                            </h3>

                            <p
                                className="
                    text-slate-400
                    text-sm
                    mt-2
                "
                            >
                                Security and preferences
                            </p>

                        </Link>

                    </div>

                </div>


            </div>
        </StudentLayout>
    );
}