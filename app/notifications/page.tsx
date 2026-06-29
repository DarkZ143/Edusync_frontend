/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import {
    HiOutlineBell,
} from "react-icons/hi2";

import {
    getNotifications,
    markNotificationRead,
} from "@/services/notification.service";

export default function NotificationsPage() {

    const [notifications, setNotifications] =
        useState<any[]>([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        // eslint-disable-next-line react-hooks/immutability
        loadNotifications();

    }, []);

    const loadNotifications = async () => {

        try {

            const data =
                await getNotifications();

            setNotifications(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };
    const handleMarkRead = async (
        id: number
    ) => {

        try {

            await markNotificationRead(id);

            setNotifications((prev) =>
                prev.map((item) =>
                    item.id === id
                        ? {
                            ...item,
                            is_read: true,
                        }
                        : item
                )
            );

        } catch (error) {

            console.error(error);

        }

    };

    return (
        <DashboardLayout>

            <div className="p-6">

                {/* Header */}

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
                            Notifications
                        </h1>

                        <p
                            className="
                                text-slate-400
                                mt-1
                            "
                        >
                            Latest student activities
                        </p>

                    </div>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-xl
                            bg-[#1890C8]/20
                            text-[#1890C8]
                        "
                    >

                        <HiOutlineBell size={18} />

                        <span>
                            {
                                notifications.filter(
                                    (n) => !n.is_read
                                ).length
                            }
                            {" "}
                            New
                        </span>

                    </div>

                </div>

                {/* Loading */}

                {loading && (

                    <div
                        className="
                            flex
                            justify-center
                            py-10
                            text-slate-400
                        "
                    >
                        Loading Notifications...
                    </div>

                )}

                {/* Empty State */}

                {!loading &&
                    notifications.length === 0 && (

                        <div
                            className="
                            rounded-2xl
                            border
                            border-slate-800
                            bg-slate-900/80
                            backdrop-blur-xl
                            p-10
                            text-center
                        "
                        >

                            <HiOutlineBell
                                size={48}
                                className="
                                mx-auto
                                text-slate-500
                            "
                            />

                            <h3
                                className="
                                text-xl
                                font-semibold
                                text-white
                                mt-4
                            "
                            >
                                No Notifications
                            </h3>

                            <p
                                className="
                                text-slate-400
                                mt-2
                            "
                            >
                                Everything is up to date
                            </p>

                        </div>

                    )}

                {/* Notifications List */}

                <div
                    className="
                        space-y-4
                    "
                >

                    {notifications.map(
                        (notification) => (

                            <div
                                key={notification.id}
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-800
                                    bg-slate-900/80
                                    backdrop-blur-xl
                                    p-5
                                    hover:border-[#1890C8]
                                    transition-all
                                    duration-300
                                "
                            >

                                <div
                                    className="
                                        flex
                                        justify-between
                                        items-start
                                    "
                                >

                                    <div>

                                        <h3
                                            className="
                                                text-white
                                                font-semibold
                                            "
                                        >
                                            {
                                                notification.title
                                            }
                                        </h3>

                                        <p
                                            className="
                                                text-slate-400
                                                mt-2
                                            "
                                        >
                                            {
                                                notification.message
                                            }
                                        </p>

                                    </div>

                                    {notification.is_read ? (

                                        <span
                                            className="
                                                px-3
                                                py-1
                                                rounded-full
                                                bg-emerald-500/15
                                                border
                                                border-emerald-500/30
                                                text-emerald-400
                                                text-xs
                                                font-medium
                                            "
                                        >
                                            ✓ Read
                                        </span>

                                    ) : (

                                        <span
                                            className="
                                                px-3
                                                py-1
                                                rounded-full
                                                bg-rose-500/15
                                                border
                                                border-rose-500/30
                                                text-rose-400
                                                text-xs
                                                font-medium
                                            "
                                        >
                                            ● Unread
                                        </span>

                                    )}

                                </div>

                                <div
                                    className="
        mt-4
        flex
        justify-between
        items-center
    "
                                >

                                    <span
                                        className="
            text-xs
            text-slate-500
        "
                                    >
                                        {
                                            new Date(
                                                notification.created_at
                                            ).toLocaleString()
                                        }
                                    </span>

                                    {!notification.is_read && (

                                        <button
                                            onClick={() =>
                                                handleMarkRead(
                                                    notification.id
                                                )
                                            }
                                            className="
        text-xs
        px-3
        py-1
        rounded-lg
        bg-[#1890C8]/20
        text-[#1890C8]
        hover:bg-[#1890C8]/30
        transition
    "
                                        >
                                            Mark Read
                                        </button>

                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </DashboardLayout>
    );
}