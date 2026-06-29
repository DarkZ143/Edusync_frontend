"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const router = useRouter();

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) {

            router.replace("/login");
            return;

        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(false);

    }, [router]);

    if (loading) {

        return (
            <div
                className="
                    min-h-screen
                    bg-slate-950
                    flex
                    items-center
                    justify-center
                    text-white
                "
            >
                Loading...
            </div>
        );

    }

    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <main className="p-6">
                    {children}
                </main>

            </div>

        </div>
    );
}