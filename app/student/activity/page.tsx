/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import StudentLayout from
    "@/components/student/StudentLayout";

import {
    HiOutlineClock,
} from "react-icons/hi2";

import api from "@/services/api";

export default function StudentActivityPage() {

    const [activities, setActivities] =
        useState<any[]>([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        // eslint-disable-next-line react-hooks/immutability
        loadActivity();

    }, []);

    const loadActivity = async () => {

        try {

            const student =
                JSON.parse(
                    localStorage.getItem(
                        "student"
                    ) || "{}"
                );

            if (!student?.id) return;

            const response =
                await api.get(
                    `/students/${student.id}/activity`
                );

            setActivities(
                response.data.activities || []
            );

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <StudentLayout>

            <div className="p-8">

                {/* Header */}

                <div className="mb-8">

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <HiOutlineClock
                            size={32}
                            className="
                                text-[#1890C8]
                            "
                        />

                        <div>

                            <h1
                                className="
                                    text-4xl
                                    font-bold
                                    text-white
                                "
                            >
                                Activity Timeline
                            </h1>

                            <p
                                className="
                                    text-slate-400
                                    mt-2
                                "
                            >
                                Track all profile updates
                            </p>

                        </div>

                    </div>

                </div>

                {/* Loading */}

                {loading && (

                    <div
                        className="
                            text-slate-400
                        "
                    >
                        Loading activity...
                    </div>

                )}

                {/* Empty */}

                {!loading &&
                    activities.length === 0 && (

                        <div
                            className="
                                rounded-3xl
                                border
                                border-slate-800
                                bg-slate-900/80
                                p-10
                                text-center
                            "
                        >

                            <h2
                                className="
                                    text-white
                                    text-xl
                                    font-semibold
                                "
                            >
                                No Activity Found
                            </h2>

                            <p
                                className="
                                    text-slate-400
                                    mt-2
                                "
                            >
                                No profile updates yet.
                            </p>

                        </div>

                    )}

                {/* Timeline */}

                <div
                    className="
                        relative
                        space-y-6
                    "
                >

                    {activities.map(
                        (
                            activity,
                            index
                        ) => (

                            <div
                                key={activity.id}
                                className="
                                    relative
                                    pl-12
                                "
                            >

                                {/* Timeline Line */}

                                {index !==
                                    activities.length - 1 && (

                                        <div
                                            className="
                                                absolute
                                                left-4
                                                top-8
                                                w-0.5
                                                h-full
                                                bg-slate-700
                                            "
                                        />

                                    )}

                                {/* Dot */}

                                <div
                                    className="
                                        absolute
                                        left-0
                                        top-2
                                        w-8
                                        h-8
                                        rounded-full
                                        bg-[#1890C8]
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <HiOutlineClock
                                        className="
                                            text-white
                                        "
                                    />

                                </div>

                                {/* Card */}

                                <div
                                    className="
                                        rounded-3xl
                                        border
                                        border-slate-800
                                        bg-slate-900/80
                                        backdrop-blur-xl
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
                                            mb-4
                                        "
                                    >

                                        <h2
                                            className="
                                                text-white
                                                font-bold
                                                text-lg
                                                capitalize
                                            "
                                        >
                                            {
                                                activity.changed_field
                                            }
                                            {" "}
                                            Updated
                                        </h2>

                                        <span
                                            className="
                                                text-xs
                                                text-slate-500
                                            "
                                        >
                                            {
                                                new Date(
                                                    activity.changed_at
                                                ).toLocaleString()
                                            }
                                        </span>

                                    </div>

                                    <div
                                        className="
                                            grid
                                            md:grid-cols-2
                                            gap-6
                                        "
                                    >

                                        <div>

                                            <p
                                                className="
                                                    text-red-400
                                                    text-sm
                                                    mb-1
                                                "
                                            >
                                                Old Value
                                            </p>

                                            <p
                                                className="
                                                    text-slate-300
                                                "
                                            >
                                                {
                                                    activity.old_value
                                                }
                                            </p>

                                        </div>

                                        <div>

                                            <p
                                                className="
                                                    text-green-400
                                                    text-sm
                                                    mb-1
                                                "
                                            >
                                                New Value
                                            </p>

                                            <p
                                                className="
                                                    text-slate-300
                                                "
                                            >
                                                {
                                                    activity.new_value
                                                }
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </StudentLayout>

    );
}