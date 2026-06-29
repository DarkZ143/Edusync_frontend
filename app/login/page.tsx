/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import {
    HiOutlineEnvelope,
    HiOutlineLockClosed,
} from "react-icons/hi2";

import { adminLogin } from "@/services/auth.service";

export default function LoginPage() {

    const router = useRouter();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    const handleLogin = async () => {

        try {

            setLoading(true);

            const response =
                await adminLogin(
                    email,
                    password
                );

            localStorage.setItem(
                "token",
                response.token
            );

            localStorage.setItem(
                "admin",
                JSON.stringify(
                    response.admin
                )
            );

            toast.success(
                "Login Successful"
            );

            router.push(
                "/dashboard"
            );

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
                bg-linear-to-br
                from-slate-950
                via-slate-900
                to-slate-950
                flex
                items-center
                justify-center
                p-6
            "
        >

            <div
                className="
                    absolute
                    w-96
                    h-96
                    bg-cyan-500/20
                    blur-[140px]
                    rounded-full
                    top-20
                    left-20
                "
            />

            <div
                className="
                    absolute
                    w-96
                    h-96
                    bg-blue-500/20
                    blur-[140px]
                    rounded-full
                    bottom-20
                    right-20
                "
            />

            <div
                className="
                    relative
                    w-full
                    max-w-md
                    rounded-3xl
                    border
                    border-slate-800
                    bg-slate-900/70
                    backdrop-blur-xl
                    p-8
                    shadow-2xl
                "
            >

                <div className="text-center">

                    <div
                        className="
                            w-20
                            h-20
                            mx-auto
                            rounded-3xl
                            bg-linear-to-r
                            from-cyan-500
                            to-blue-600
                            flex
                            items-center
                            justify-center
                            text-white
                            text-3xl
                            font-bold
                        "
                    >
                        E
                    </div>

                    <h1
                        className="
                            text-4xl
                            font-bold
                            text-white
                            mt-6
                        "
                    >
                        EduSync
                    </h1>

                    <p
                        className="
                            text-slate-400
                            mt-2
                        "
                    >
                        Student Management System
                    </p>

                </div>

                <div
                    className="
                        mt-10
                        space-y-5
                    "
                >

                    <div
                        className="
                            relative
                        "
                    >

                        <HiOutlineEnvelope
                            size={20}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-500
                            "
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                bg-slate-800
                                border
                                border-slate-700
                                rounded-xl
                                py-3
                                pl-12
                                pr-4
                                text-white
                                outline-none
                                focus:border-cyan-500
                            "
                        />

                    </div>

                    <div
                        className="
                            relative
                        "
                    >

                        <HiOutlineLockClosed
                            size={20}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-500
                            "
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                bg-slate-800
                                border
                                border-slate-700
                                rounded-xl
                                py-3
                                pl-12
                                pr-4
                                text-white
                                outline-none
                                focus:border-cyan-500
                            "
                        />

                    </div>

                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="
                            w-full
                            py-3
                            rounded-xl
                            font-semibold
                            text-white
                            bg-linear-to-r
                            from-cyan-500
                            to-blue-600
                            hover:opacity-90
                            transition
                        "
                    >
                        {
                            loading
                                ? "Signing In..."
                                : "Login"
                        }
                    </button>

                </div>

                <div
                    className="
                        mt-8
                        text-center
                        text-slate-500
                        text-sm
                    "
                >
                    Secure • Fast • Reliable
                </div>

            </div>

        </div>
    );
}