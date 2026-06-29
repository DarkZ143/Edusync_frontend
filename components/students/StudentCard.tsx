import {
    HiOutlineEye,
    HiOutlinePencilSquare,
    HiOutlineTrash,
} from "react-icons/hi2";

interface Student {
    id: number;
    student_id: string;
    first_name: string;
    last_name: string;
    course: string;
    email: string;
    is_active: boolean;
}

interface Props {
    student: Student;
    onView?: (student: Student) => void;
    onEdit?: (student: Student) => void;
    onDelete?: (student: Student) => void;
}

export default function StudentCard({
    student,
    onView,
    onEdit,
    onDelete,
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
                hover:border-[#1890C8]
                transition-all
                duration-300
                hover:-translate-y-1
            "
        >

            <div
                className="
                    w-14
                    h-14
                    rounded-full
                    bg-[#1890C8]
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold
                    text-white
                "
            >
                {student.first_name.charAt(0)}
            </div>

            <div className="mt-4">

                <h3
                    className="
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    {student.first_name} {student.last_name}
                </h3>

                <p className="text-slate-400">
                    {student.student_id}
                </p>

                <p className="text-slate-400 mt-2">
                    {student.course}
                </p>

                <p className="text-slate-500 text-sm mt-1 truncate">
                    {student.email}
                </p>

            </div>

            <div className="mt-4">

                <span
                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        ${student.is_active
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }
                    `}
                >
                    {student.is_active
                        ? "Active"
                        : "Inactive"}
                </span>

            </div>

            <div className="flex gap-3 mt-5">

                <button
                    onClick={() =>
                        onView?.(student)
                    }
                    className="
                        flex-1
                        bg-slate-800
                        hover:bg-slate-700
                        p-2
                        rounded-xl
                        text-white
                    "
                >
                    <HiOutlineEye
                        size={18}
                        className="mx-auto"
                    />
                </button>

                <button
                    onClick={() =>
                        onEdit?.(student)
                    }
                    className="
                        flex-1
                        bg-yellow-500/20
                        hover:bg-yellow-500/30
                        p-2
                        rounded-xl
                        text-yellow-400
                    "
                >
                    <HiOutlinePencilSquare
                        size={18}
                        className="mx-auto"
                    />
                </button>

                <button
                    onClick={() =>
                        onDelete?.(student)
                    }
                    className="
                        flex-1
                        bg-red-500/20
                        hover:bg-red-500/30
                        p-2
                        rounded-xl
                        text-red-400
                    "
                >
                    <HiOutlineTrash
                        size={18}
                        className="mx-auto"
                    />
                </button>

            </div>

        </div>
    );
}