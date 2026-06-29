/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import StudentLayout from "@/components/student/StudentLayout";

import {
    changePassword,
} from "@/services/changePassword.service";

import {
    HiOutlineEye,
    HiOutlineEyeSlash,
    HiOutlineLockClosed,
} from "react-icons/hi2";

export default function ChangePasswordPage() {

    const [loading, setLoading] =
        useState(false);

    const [showCurrent, setShowCurrent] =
        useState(false);

    const [showNew, setShowNew] =
        useState(false);

    const [showConfirm, setShowConfirm] =
        useState(false);

    const [form, setForm] =
        useState({
            current_password: "",
            new_password: "",
            new_password_confirmation: "",
        });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        setForm({
            ...form,
            [e.target.name]:
                e.target.value,
        });

    };

    const handleSubmit = async () => {

        try {

            if (
                form.new_password !==
                form.new_password_confirmation
            ) {

                toast.error(
                    "Passwords do not match"
                );

                return;

            }

            setLoading(true);

            await changePassword(
                form
            );

            toast.success(
                "Password updated successfully"
            );

            setForm({
                current_password: "",
                new_password: "",
                new_password_confirmation: "",
            });

        } catch (error: any) {

            console.log(error);

            console.log(
                error?.response?.data
            );

            toast.error(
                JSON.stringify(
                    error?.response?.data
                )
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <StudentLayout>

            <div className="p-8">

                <div
                    className="
                        max-w-2xl
                        mx-auto
                    "
                >

                    <div
                        className="
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900/80
                            backdrop-blur-xl
                            p-8
                        "
                    >

                        <div
                            className="
                                flex
                                items-center
                                gap-3
                                mb-8
                            "
                        >

                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-[#1890C8]/20
                                    flex
                                    items-center
                                    justify-center
                                    text-[#1890C8]
                                "
                            >
                                <HiOutlineLockClosed
                                    size={24}
                                />
                            </div>

                            <div>

                                <h1
                                    className="
                                        text-3xl
                                        font-bold
                                        text-white
                                    "
                                >
                                    Change Password
                                </h1>

                                <p
                                    className="
                                        text-slate-400
                                        text-sm
                                        mt-1
                                    "
                                >
                                    Keep your account secure
                                </p>

                            </div>

                        </div>

                        <div
                            className="
                                space-y-5
                            "
                        >

                            {/* Current Password */}

                            <div className="relative">

                                <input
                                    type={
                                        showCurrent
                                            ? "text"
                                            : "password"
                                    }
                                    name="current_password"
                                    placeholder="Current Password"
                                    value={
                                        form.current_password
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="
                                        w-full
                                        bg-slate-800
                                        p-4
                                        rounded-xl
                                        text-white
                                        pr-12
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowCurrent(
                                            !showCurrent
                                        )
                                    }
                                    className="
                                        absolute
                                        right-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-slate-400
                                    "
                                >
                                    {showCurrent
                                        ? <HiOutlineEyeSlash size={20} />
                                        : <HiOutlineEye size={20} />
                                    }
                                </button>

                            </div>

                            {/* New Password */}

                            <div className="relative">

                                <input
                                    type={
                                        showNew
                                            ? "text"
                                            : "password"
                                    }
                                    name="new_password"
                                    placeholder="New Password"
                                    value={
                                        form.new_password
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="
                                        w-full
                                        bg-slate-800
                                        p-4
                                        rounded-xl
                                        text-white
                                        pr-12
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowNew(
                                            !showNew
                                        )
                                    }
                                    className="
                                        absolute
                                        right-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-slate-400
                                    "
                                >
                                    {showNew
                                        ? <HiOutlineEyeSlash size={20} />
                                        : <HiOutlineEye size={20} />
                                    }
                                </button>

                            </div>

                            {/* Confirm Password */}

                            <div className="relative">

                                <input
                                    type={
                                        showConfirm
                                            ? "text"
                                            : "password"
                                    }
                                    name="new_password_confirmation"
                                    placeholder="Confirm Password"
                                    value={
                                        form.new_password_confirmation
                                    }
                                    onChange={
                                        handleChange
                                    }
                                    className="
                                        w-full
                                        bg-slate-800
                                        p-4
                                        rounded-xl
                                        text-white
                                        pr-12
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirm(
                                            !showConfirm
                                        )
                                    }
                                    className="
                                        absolute
                                        right-4
                                        top-1/2
                                        -translate-y-1/2
                                        text-slate-400
                                    "
                                >
                                    {showConfirm
                                        ? <HiOutlineEyeSlash size={20} />
                                        : <HiOutlineEye size={20} />
                                    }
                                </button>

                            </div>

                            {/* Submit Button */}

                            <button
                                onClick={
                                    handleSubmit
                                }
                                disabled={
                                    loading
                                }
                                className="
                                    w-full
                                    py-4
                                    rounded-xl
                                    bg-[#1890C8]
                                    text-white
                                    font-semibold
                                    transition-all
                                    hover:opacity-90
                                    disabled:opacity-50
                                "
                            >
                                {
                                    loading
                                        ? "Updating..."
                                        : "Update Password"
                                }
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </StudentLayout>

    );
}