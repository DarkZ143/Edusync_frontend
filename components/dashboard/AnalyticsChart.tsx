interface Props {
    stats: {
        total_students: number;
        active_students: number;
        total_notifications: number;
        profile_updates: number;
        month_registrations: number;
    };
}

export default function AnalyticsChartStudent({
    stats,
}: Props) {

    if (!stats) {
        return null;
    }

    const activePercentage =
        stats.total_students > 0
            ? Math.round(
                (stats.active_students /
                    stats.total_students) *
                100
            )
            : 0;




    return (
        <div
            className="
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/80
                backdrop-blur-xl
                p-8
                mt-6
                overflow-hidden
                relative
            "
        >
            {/* Glow */}

            <div
                className="
                    absolute
                    top-0
                    right-0
                    w-72
                    h-72
                    bg-[#1890C8]/10
                    blur-3xl
                "
            />

            <div className="relative z-10">

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    Analytics Overview
                </h2>

                <p
                    className="
                        text-slate-400
                        mt-2
                    "
                >
                    Real-time EduSync Insights
                </p>

                <div
                    className="
                        grid
                        grid-cols-2
                        gap-8
                        mt-8
                    "
                >

                    {/* Left Side */}

                    <div>

                        <p
                            className="
                                text-slate-400
                            "
                        >
                            Total Students
                        </p>

                        <h1
                            className="
                                text-6xl
                                font-bold
                                text-white
                                mt-2
                            "
                        >
                            {stats.total_students}
                        </h1>

                        <p
                            className="
                                text-[#1890C8]
                                mt-3
                                font-medium
                            "
                        >
                            +{stats.month_registrations}
                            {" "}
                            This Month
                        </p>

                    </div>

                    {/* Right Side */}

                    <div
                        className="
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <div
                            className="
                                relative
                                w-44
                                h-44
                                rounded-full
                                border-14
                                border-[#1890C8]
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <div
                                className="
                                    text-center
                                "
                            >

                                <h2
                                    className="
                                        text-4xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    {activePercentage}%
                                </h2>

                                <p
                                    className="
                                        text-slate-400
                                        text-sm
                                    "
                                >
                                    Active
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* KPI Cards */}

                <div
                    className="
                        grid
                        grid-cols-3
                        gap-4
                        mt-8
                    "
                >

                    <div
                        className="
                            bg-slate-800/50
                            rounded-2xl
                            p-5
                        "
                    >
                        <p className="text-slate-400">
                            Notifications
                        </p>

                        <h3
                            className="
                                text-3xl
                                font-bold
                                text-white
                                mt-2
                            "
                        >
                            {stats.total_notifications}
                        </h3>
                    </div>

                    <div
                        className="
                            bg-slate-800/50
                            rounded-2xl
                            p-5
                        "
                    >
                        <p className="text-slate-400">
                            Updates
                        </p>

                        <h3
                            className="
                                text-3xl
                                font-bold
                                text-white
                                mt-2
                            "
                        >
                            {stats.profile_updates}
                        </h3>
                    </div>

                    <div
                        className="
                            bg-slate-800/50
                            rounded-2xl
                            p-5
                        "
                    >
                        <p className="text-slate-400">
                            Active Students
                        </p>

                        <h3
                            className="
                                text-3xl
                                font-bold
                                text-white
                                mt-2
                            "
                        >
                            {stats.active_students}
                        </h3>
                    </div>

                </div>

            </div>
        </div>
    );
}