interface Student {
    id: number;
    student_id: string;
    first_name: string;
    last_name: string;
    course: string;
}

interface Props {
    students: Student[];
}

export default function RecentStudents({
    students,
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
                        Recent Students
                    </h2>

                    <p
                        className="
                            text-sm
                            text-slate-400
                            mt-1
                        "
                    >
                        Latest student registrations
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
                    {students.length} Students
                </span>

            </div>

            {/* Students */}

            <div className="space-y-4">

                {students.map((student) => (

                    <div
                        key={student.id}
                        className="
                            flex
                            items-center
                            justify-between
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
                                items-center
                                gap-4
                            "
                        >

                            {/* Avatar */}

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-[#1890C8]
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                    font-bold
                                    shadow-[0_0_20px_rgba(24,144,200,0.4)]
                                "
                            >
                                {student.first_name
                                    .charAt(0)}
                            </div>

                            {/* Info */}

                            <div>

                                <h3
                                    className="
                                        text-white
                                        font-semibold
                                    "
                                >
                                    {student.first_name}
                                    {" "}
                                    {student.last_name}
                                </h3>

                                <p
                                    className="
                                        text-sm
                                        text-slate-400
                                    "
                                >
                                    {
                                        student.student_id
                                    }
                                </p>

                            </div>

                        </div>

                        {/* Course */}

                        <div
                            className="
                                hidden
                                md:flex
                            "
                        >

                            <span
                                className="
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-emerald-500/15
                                    border
                                    border-emerald-500/20
                                    text-emerald-400
                                    text-xs
                                    font-medium
                                "
                            >
                                {student.course}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}