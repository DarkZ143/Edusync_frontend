interface Update {
    id: number;
    changed_field: string;
    old_value: string;
    new_value: string;
    changed_at: string;
}

interface Props {
    updates: Update[];
}

export default function RecentUpdates({
    updates,
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

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2
                        className="
                            text-xl
                            font-bold
                            text-white
                        "
                    >
                        Recent Updates
                    </h2>

                    <p
                        className="
                            text-sm
                            text-slate-400
                            mt-1
                        "
                    >
                        Latest profile modifications
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
                    {updates.length} Updates
                </span>

            </div>

            {/* Timeline */}

            <div className="space-y-5">

                {updates.map((update, index) => (

                    <div
                        key={update.id}
                        className="
                            relative
                            pl-8
                        "
                    >

                        {/* Line */}

                        {index !== updates.length - 1 && (

                            <div
                                className="
                                    absolute
                                    left-1.75
                                    top-6
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
                                top-1
                                w-4
                                h-4
                                rounded-full
                                bg-[#1890C8]
                                shadow-[0_0_12px_rgba(24,144,200,0.7)]
                            "
                        />

                        {/* Content */}

                        <div
                            className="
                                rounded-2xl
                                border
                                border-slate-800
                                bg-slate-800/50
                                p-4
                                hover:border-[#1890C8]
                                transition-all
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <h3
                                    className="
                                        text-white
                                        font-semibold
                                        capitalize
                                    "
                                >
                                    {update.changed_field} Updated
                                </h3>

                                <span
                                    className="
                                        text-xs
                                        text-slate-500
                                    "
                                >
                                    {new Date(
                                        update.changed_at
                                    ).toLocaleDateString()}
                                </span>

                            </div>

                            <div
                                className="
                                    mt-3
                                    grid
                                    grid-cols-2
                                    gap-4
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            text-red-400
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
                                        {update.old_value}
                                    </p>

                                </div>

                                <div>

                                    <p
                                        className="
                                            text-xs
                                            text-green-400
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
                                        {update.new_value}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}