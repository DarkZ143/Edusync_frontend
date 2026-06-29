/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

interface Props {
    open: boolean;
    onClose: () => void;
    student: any;
}

export default function ViewStudentDrawer({
    open,
    onClose,
    student,
}: Props) {

    if (!open || !student) return null;

    return (
        <div
            className="
                fixed
                inset-0
                bg-black/60
                z-50
                flex
                justify-end
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    h-full
                    bg-slate-900
                    border-l
                    border-slate-800
                    overflow-y-auto
                    p-6
                "
            >

                <div className="flex justify-between items-center">

                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-white
                        "
                    >
                        Student Details
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                            text-slate-400
                            hover:text-white
                            text-xl
                        "
                    >
                        ✕
                    </button>

                </div>

                <div className="mt-8">

                    <div
                        className="
                            w-20
                            h-20
                            rounded-full
                            bg-[#1890C8]
                            flex
                            items-center
                            justify-center
                            text-3xl
                            font-bold
                            text-white
                            mx-auto
                        "
                    >
                        {student.first_name?.charAt(0)}
                    </div>

                    <h3
                        className="
                            text-center
                            text-xl
                            font-semibold
                            text-white
                            mt-4
                        "
                    >
                        {student.first_name} {student.last_name}
                    </h3>

                    <p
                        className="
                            text-center
                            text-slate-400
                        "
                    >
                        {student.student_id}
                    </p>

                </div>

                <div className="mt-8 space-y-4">

                    <Info
                        label="Email"
                        value={student.email}
                    />

                    <Info
                        label="Phone"
                        value={student.phone}
                    />

                    <Info
                        label="Gender"
                        value={student.gender}
                    />

                    <Info
                        label="Date of Birth"
                        value={student.dob}
                    />

                    <Info
                        label="Course"
                        value={student.course}
                    />

                    <Info
                        label="Address"
                        value={student.address}
                    />

                    <Info
                        label="City"
                        value={student.city}
                    />

                    <Info
                        label="State"
                        value={student.state}
                    />

                    <Info
                        label="Country"
                        value={student.country}
                    />

                    <span
                        className={`
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        text-xs
        font-semibold
        border

        ${student.is_active
                                ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                                : "bg-rose-500/15 text-rose-400 border-rose-500/30"
                            }
    `}
                    >

                        <span
                            className={`
            w-2
            h-2
            rounded-full

            ${student.is_active
                                    ? "bg-emerald-400"
                                    : "bg-rose-400"
                                }
        `}
                        />

                        {
                            student.is_active
                                ? "Active"
                                : "Inactive"
                        }

                    </span>

                </div>

            </div>

        </div>
    );
}

function Info({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div
            className="
                bg-slate-800
                rounded-xl
                p-4
            "
        >
            <p
                className="
                    text-xs
                    text-slate-400
                    uppercase
                "
            >
                {label}
            </p>

            <p
                className="
                    text-white
                    mt-1
                "
            >
                {value || "-"}
            </p>
        </div>
    );
}