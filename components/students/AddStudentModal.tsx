/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { createStudent } from "@/services/student.service";
import StudentForm from "./StudentForm";

interface Props {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const initialForm = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "Male",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    course: "",
    password: "",
};

export default function AddStudentModal({
    open,
    onClose,
    onSuccess,
}: Props) {

    const [loading, setLoading] = useState(false);

    const [form, setForm] =
        useState(initialForm);

    if (!open) return null;

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async () => {

        try {

            setLoading(true);

            await createStudent(form);

            toast.success(
                "Student created successfully"
            );

            setForm(initialForm);

            onSuccess();

            onClose();

        } catch (error: any) {

            const message =
                error?.response?.data?.message ||
                "Failed to create student";

            toast.error(message);

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
                        Add Student
                    </h2>

                    <button
                        onClick={onClose}
                        className="
                            text-slate-400
                            hover:text-white
                        "
                    >
                        ✕
                    </button>

                </div>

                <StudentForm
                    form={form}
                    handleChange={handleChange}
                    showPassword={true}
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
                            bg-[#1890C8]
                            text-white
                            min-w-40
                        "
                    >
                        {
                            loading
                                ? "Creating..."
                                : "Create Student"
                        }
                    </button>

                </div>

            </div>

        </div>
    );
}