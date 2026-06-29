/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import toast from "react-hot-toast";

import {
    deleteStudent,
} from "@/services/student.service";

interface Props {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    student: any;
}

export default function DeleteStudentModal({
    open,
    onClose,
    onSuccess,
    student,
}: Props) {

    if (!open || !student) return null;

    const handleDelete = async () => {

        try {

            await deleteStudent(
                student.id
            );

            toast.success(
                "Student deleted successfully"
            );

            onSuccess();

            onClose();

        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to delete student"
            );

        }

    };

    return (
        <div
            className="
                fixed
                inset-0
                bg-black/70
                backdrop-blur-sm
                flex
                items-center
                justify-center
                z-50
                p-4
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-6
                "
            >

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    Delete Student
                </h2>

                <p
                    className="
                        text-slate-400
                        mt-4
                    "
                >
                    Are you sure you want
                    to delete
                </p>

                <p
                    className="
                        text-red-400
                        font-semibold
                        mt-2
                    "
                >
                    {student.first_name}
                    {" "}
                    {student.last_name}
                </p>

                <div
                    className="
                        flex
                        justify-end
                        gap-3
                        mt-8
                    "
                >

                    <button
                        onClick={onClose}
                        className="
                            px-5
                            py-3
                            rounded-xl
                            bg-slate-800
                            text-white
                        "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleDelete}
                        className="
                            px-5
                            py-3
                            rounded-xl
                            bg-red-600
                            text-white
                        "
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}