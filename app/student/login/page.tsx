"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import {
    HiOutlineEnvelope,
    HiOutlineLockClosed,
} from "react-icons/hi2";

import { studentLogin } from "@/services/studentAuth.service";
import Image from "next/image";

export default function StudentLoginPage() {

    const router = useRouter();

    const [loading, setLoading] =
        useState(false);

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleLogin = async () => {

        try {

            setLoading(true);

            const response =
                await studentLogin(
                    email,
                    password
                );

            localStorage.setItem(
                "student_token",
                response.token
            );

            localStorage.setItem(
                "student",
                JSON.stringify(
                    response.student
                )
            );

            toast.success(
                "Login Successful"
            );

            router.push(
                "/student/dashboard"
            );

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ||
                "Login Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (
        <div
            className="
                min-h-screen
                bg-[#020617]
                flex
                items-center
                justify-center
                p-6
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900/80
                    backdrop-blur-xl
                    p-8
                "
            >

                {/* Logo */}

                <div className="text-center mb-8">

                    <div
                        className="
                            w-20
                            h-20
                            mx-auto
                            rounded-4xl
                            bg-[#1890C8]/20
                            flex
                            items-center
                            justify-center
                            text-[#1890C8]
                            mb-4
                        "
                    >

                        <Image
                            src="/logo.png"
                            alt="EduSync"
                            width={64}
                            height={64}
                            className="
                w-16
                h-16
                object-contain
                rounded-4xl
            "
                        />

                    </div>

                    <h1
                        className="
                            text-4xl
                            font-black
                        "
                    >

                        <span
                            className="
                                text-[#1890C8]
                            "
                        >
                            Edu
                        </span>

                        <span
                            className="
                                text-white
                            "
                        >
                            Sync
                        </span>

                    </h1>

                    <p
                        className="
                            text-slate-400
                            mt-3
                        "
                    >
                        Student Portal
                    </p>

                </div>

                {/* Email */}

                <div className="mb-4">

                    <label
                        className="
                            text-slate-300
                            text-sm
                            block
                            mb-2
                        "
                    >
                        Email Address
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            px-4
                            py-3
                        "
                    >

                        <HiOutlineEnvelope
                            className="
                                text-slate-400
                            "
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            placeholder="Enter email"
                            className="
                                bg-transparent
                                outline-none
                                text-white
                                flex-1
                            "
                        />

                    </div>

                </div>

                {/* Password */}

                <div className="mb-6">

                    <label
                        className="
                            text-slate-300
                            text-sm
                            block
                            mb-2
                        "
                    >
                        Password
                    </label>

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            bg-slate-800
                            border
                            border-slate-700
                            rounded-xl
                            px-4
                            py-3
                        "
                    >

                        <HiOutlineLockClosed
                            className="
                                text-slate-400
                            "
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            placeholder="Enter password"
                            className="
                                bg-transparent
                                outline-none
                                text-white
                                flex-1
                            "
                        />

                    </div>

                </div>

                {/* Login Button */}

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="
                        w-full
                        py-3
                        rounded-xl
                        bg-[#1890C8]
                        text-white
                        font-semibold
                        hover:opacity-90
                        transition
                    "
                >
                    {
                        loading
                            ? "Signing In..."
                            : "Student Login"
                    }
                </button>

            </div>

        </div>
    );
}