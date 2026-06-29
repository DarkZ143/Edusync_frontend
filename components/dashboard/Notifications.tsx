interface Notification {
    id: number;
    title: string;
    message: string;
    is_read: boolean;
}

interface Props {
    notifications: Notification[];
}

export default function RecentNotifications({
    notifications,
}: Props) {
    return (
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

            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    mb-6
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
                        Recent Notifications
                    </h2>

                    <p
                        className="
                            text-sm
                            text-slate-400
                            mt-1
                        "
                    >
                        Latest system alerts
                    </p>

                </div>

                <span
                    className="
                        px-3
                        py-1
                        rounded-full
                        bg-[#1890C8]/20
                        text-[#1890C8]
                        text-xs
                        font-medium
                    "
                >
                    {notifications.length} Alerts
                </span>

            </div>

            {/* Notifications */}

            <div className="space-y-4">

                {notifications.map((notification) => (

                    <div
                        key={notification.id}
                        className="
                            rounded-2xl
                            border
                            border-slate-800
                            bg-slate-800/50
                            p-4
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

                            <div className="flex-1">

                                <h3
                                    className="
                                        text-white
                                        font-semibold
                                    "
                                >
                                    {notification.title}
                                </h3>

                                <p
                                    className="
                                        text-sm
                                        text-slate-400
                                        mt-2
                                    "
                                >
                                    {notification.message}
                                </p>

                            </div>

                            <span
                                className={`
                                    ml-4
                                    px-3
                                    py-1
                                    rounded-full
                                    text-xs
                                    font-medium
                                    whitespace-nowrap

                                    ${notification.is_read
                                        ? `
                                                bg-emerald-500/15
                                                border
                                                border-emerald-500/20
                                                text-emerald-400
                                            `
                                        : `
                                                bg-rose-500/15
                                                border
                                                border-rose-500/20
                                                text-rose-400
                                            `
                                    }
                                `}
                            >
                                {
                                    notification.is_read
                                        ? "✓ Read"
                                        : "● Unread"
                                }
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}