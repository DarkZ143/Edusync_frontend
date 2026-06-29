/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import {
    HiOutlineClock,
} from "react-icons/hi2";

import {
    getActivities,
} from "@/services/activity.service";

export default function ActivityPage() {

    const [activities, setActivities] =
        useState<any[]>([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        loadActivities();

    }, []);

    const loadActivities = async () => {

        try {

            const data =
                await getActivities();

            setActivities(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    return (
        <DashboardLayout>

            <div className="p-6">

                <div
                    className="
                        flex
                        justify-between
                        items-center
                        mb-8
                    "
                >

                    <div>

                        <h1
                            className="
                                text-3xl
                                font-bold
                                text-white
                            "
                        >
                            Activity Timeline
                        </h1>

                        <p
                            className="
                                text-slate-400
                                mt-1
                            "
                        >
                            Student profile updates
                        </p>

                    </div>

                    <div
                        className="
                            px-4
                            py-2
                            rounded-xl
                            bg-[#1890C8]/20
                            text-[#1890C8]
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <HiOutlineClock
                            size={18}
                        />

                        {activities.length}
                        {" "}
                        Records

                    </div>

                </div>

                {loading && (

                    <div
                        className="
                            text-slate-400
                        "
                    >
                        Loading Activity...
                    </div>

                )}

                <div
                    className="
                        relative
                        border-l
                        border-slate-700
                        ml-4
                    "
                >

                    {activities.map(
                        (activity) => (

                            <div
                                key={activity.id}
                                className="
                                    relative
                                    mb-8
                                    pl-8
                                "
                            >

                                <div
                                    className="
                                        absolute
                                        -left-2
                                        top-2
                                        w-4
                                        h-4
                                        rounded-full
                                        bg-[#1890C8]
                                    "
                                />

                                <div
                                    className="
                                        rounded-2xl
                                        border
                                        border-slate-800
                                        bg-slate-900/80
                                        p-5
                                    "
                                >

                                    <h3
                                        className="
        text-white
        font-semibold
    "
                                    >
                                        {activity.changed_field} Updated
                                    </h3>

                                    <p
                                        className="
        text-slate-400
        text-sm
        mt-1
    "
                                    >
                                        {activity.first_name}{" "}
                                        {activity.last_name}

                                        {" • "}

                                        <span
                                            className="
        px-3
        py-1
        rounded-full
        bg-[#1890C8]/20
        text-[#1890C8]
        text-xs
    "
                                        >
                                            {activity.student_code}
                                        </span>
                                    </p>

                                    <div
                                        className="
                                            mt-3
                                            grid
                                            md:grid-cols-2
                                            gap-4
                                        "
                                    >

                                        <div>

                                            <p
                                                className="
                                                    text-xs
                                                    text-red-400
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
                                                    text-xs
                                                    text-green-400
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

                                    <div
                                        className="
                                            mt-4
                                            text-xs
                                            text-slate-500
                                        "
                                    >
                                        {
                                            new Date(
                                                activity.changed_at
                                            ).toLocaleString()
                                        }
                                    </div>

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </DashboardLayout>
    );
}