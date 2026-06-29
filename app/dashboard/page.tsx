"use client";

import { useEffect, useState } from "react";
import { getDashboard } from "@/services/dashboard.service";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentStudents from "../../components/dashboard/RecentStudents";
import RecentNotifications from "../../components/dashboard/Notifications";
import RecentUpdates from "../../components/dashboard/RecentUpdates";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { HiOutlineBell, HiOutlinePencilSquare, HiOutlineUserGroup, HiOutlineUsers } from "react-icons/hi2";
import AnalyticsChartStudent from "@/components/dashboard/AnalyticsChart";

export default function DashboardPage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [dashboard, setDashboard] = useState<any>(null);

    useEffect(() => {
        const loadDashboard = async () => {
            try {
                const data = await getDashboard();
                setDashboard(data);
            } catch (error) {
                console.error(error);
            }
        };

        loadDashboard();
    }, []);

    if (!dashboard) {
        return (
            <div className="p-10">
                Loading...
            </div>
        );
    }

    return (
        <DashboardLayout>
            <div className="p-10">

                <h1 className="text-3xl font-bold mb-6">
                    EduSync Dashboard
                </h1>

                <div className="grid grid-cols-4 gap-6">

                    <StatsCard
                        title="Students"
                        value={dashboard.stats.total_students}
                        icon={<HiOutlineUsers size={24} />}
                        href="/students"
                    />

                    <StatsCard
                        title="Active"
                        value={dashboard.stats.active_students}
                        icon={<HiOutlineUserGroup size={24} />}
                        href="/students?status=active"
                    />

                    <StatsCard
                        title="Notifications"
                        value={dashboard.stats.unread_notifications}
                        icon={<HiOutlineBell size={24} />}
                        href="/notifications"
                    />

                    <StatsCard
                        title="Updates"
                        value={dashboard.stats.profile_updates}
                        icon={<HiOutlinePencilSquare size={24} />}
                        href="/activity"
                    />

                </div>

                <div className="grid grid-cols-12 gap-6 mt-6">

                    {/* Left Side */}

                    <div className="col-span-7">

                        <RecentStudents
                            students={dashboard.recent_students}
                        />

                    </div>

                    {/* Right Side */}

                    <div className="col-span-5">

                        <RecentNotifications
                            notifications={
                                dashboard.recent_notifications
                            }
                        />

                    </div>

                </div>

                <div className="mt-6">

                    <RecentUpdates
                        updates={dashboard.recent_updates}
                    />

                </div>

                <div className="mt-6">
                    <AnalyticsChartStudent
                        stats={dashboard.stats}
                    />
                </div>
            </div>
        </DashboardLayout>

    );
}