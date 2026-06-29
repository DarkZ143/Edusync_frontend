/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import StudentForm from "./StudentForm";
import { updateStudent } from "@/services/student.service";

interface Props {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    student: any;
}

const emptyForm = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "Male",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    course: "",
};

export default function EditStudentModal({
    open,
    onClose,
    onSuccess,
    student,
}: Props) {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState(emptyForm);

    useEffect(() => {

        if (!student) {
            setForm(emptyForm);
            return;
        }

        setForm({
            first_name: student.first_name ?? "",
            last_name: student.last_name ?? "",
            email: student.email ?? "",
            phone: student.phone ?? "",
            gender: student.gender ?? "Male",

            dob: student.dob
                ? String(student.dob).split("T")[0]
                : "",

            address: student.address ?? "",
            city: student.city ?? "",
            state: student.state ?? "",
            country: student.country ?? "",
            course: student.course ?? "",
        });

    }, [student]);

    if (!open || !student) return null;

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) => {

        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    };

    const handleSubmit = async () => {

        try {

            setLoading(true);

            await updateStudent(
                student.id,
                form
            );

            toast.success(
                "Student updated successfully"
            );

            onSuccess();

            onClose();

        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to update student"
            );

        } finally {

            setLoading(false);

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
                    max-w-4xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900
                    p-6
                "
            >

                <div
                    className="
                        flex
                        justify-between
                        items-center
                        mb-6
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-white
                        "
                    >
                        Edit Student
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

                <StudentForm
                    form={form}
                    handleChange={handleChange}
                    showPassword={false}
                />

                <div
                    className="
                        flex
                        justify-end
                        gap-3
                        mt-6
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
                        onClick={handleSubmit}
                        disabled={loading}
                        className="
                            px-5
                            py-3
                            rounded-xl
                            bg-yellow-500
                            text-black
                            font-semibold
                            min-w-40
                        "
                    >
                        {
                            loading
                                ? "Updating..."
                                : "Update Student"
                        }
                    </button>

                </div>

            </div>

        </div>
    );
}