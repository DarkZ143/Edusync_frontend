/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import StudentLayout from
    "@/components/student/StudentLayout";

import {

} from "react-icons/hi2";

import {
    updateProfile,
} from "@/services/studentProfile.service";

export default function StudentProfilePage() {

    const [loading, setLoading] =
        useState(false);

    const [studentId, setStudentId] =
        useState<number | null>(null);

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        country: "",
        course: "",
        student_id: "",
    });

    useEffect(() => {

        const student =
            JSON.parse(
                localStorage.getItem(
                    "student"
                ) || "{}"
            );

        if (!student?.id) return;

        setStudentId(student.id);

        setForm({
            first_name:
                student.first_name || "",
            last_name:
                student.last_name || "",
            email:
                student.email || "",
            phone:
                student.phone || "",
            gender:
                student.gender || "",
            dob:
                student.dob
                    ? new Date(student.dob)
                        .toISOString()
                        .split("T")[0]
                    : "",
            address:
                student.address || "",
            city:
                student.city || "",
            state:
                student.state || "",
            country:
                student.country || "",
            course:
                student.course || "",
            student_id:
                student.student_id || "",
        });

    }, []);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {

        setForm({
            ...form,
            [e.target.name]:
                e.target.value,
        });

    };

    const handleSubmit = async () => {

        try {

            if (!studentId) return;

            setLoading(true);

            await updateProfile(
                studentId,
                {
                    first_name:
                        form.first_name,
                    last_name:
                        form.last_name,
                    phone:
                        form.phone,
                    gender:
                        form.gender,
                    dob:
                        form.dob,
                    address:
                        form.address,
                    city:
                        form.city,
                    state:
                        form.state,
                    country:
                        form.country,
                }
            );

            const student =
                JSON.parse(
                    localStorage.getItem(
                        "student"
                    ) || "{}"
                );

            localStorage.setItem(
                "student",
                JSON.stringify({
                    ...student,
                    ...form,
                })
            );

            toast.success(
                "Profile Updated Successfully"
            );

        } catch (error: any) {

            toast.error(
                error?.response?.data?.message ||
                "Failed to update profile"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <StudentLayout>

            <div className="p-8">

                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        gap-5
                        mb-8
                    "
                >

                    <div
                        className="
                            w-20
                            h-20
                            rounded-full
                            bg-[#1890C8]
                            flex
                            items-center
                            justify-center
                            text-white
                            text-3xl
                            font-bold
                        "
                    >
                        {
                            form.first_name
                                ?.charAt(0)
                        }
                    </div>

                    <div>

                        <h1
                            className="
                                text-4xl
                                font-bold
                                text-white
                            "
                        >
                            {form.first_name}
                            {" "}
                            {form.last_name}
                        </h1>

                        <p
                            className="
                                text-slate-400
                                mt-2
                            "
                        >
                            {
                                form.student_id
                            }
                        </p>

                    </div>

                </div>

                {/* Card */}

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

                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-white
                            mb-6
                        "
                    >
                        Profile Information
                    </h2>

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            gap-5
                        "
                    >

                        <input
                            name="first_name"
                            value={
                                form.first_name
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="First Name"
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                            "
                        />

                        <input
                            name="last_name"
                            value={
                                form.last_name
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Last Name"
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                            "
                        />

                        <input
                            disabled
                            value={
                                form.email
                            }
                            className="
                                bg-slate-700
                                p-3
                                rounded-xl
                                text-slate-400
                                cursor-not-allowed
                            "
                        />

                        <input
                            disabled
                            value={
                                form.student_id
                            }
                            className="
                                bg-slate-700
                                p-3
                                rounded-xl
                                text-slate-400
                                cursor-not-allowed
                            "
                        />

                        <input
                            disabled
                            value={
                                form.course
                            }
                            className="
                                bg-slate-700
                                p-3
                                rounded-xl
                                text-slate-400
                                cursor-not-allowed
                            "
                        />

                        <input
                            name="phone"
                            value={
                                form.phone
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Phone"
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                            "
                        />

                        <select
                            name="gender"
                            value={
                                form.gender
                            }
                            onChange={
                                handleChange
                            }
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                            "
                        >
                            <option value="">
                                Select Gender
                            </option>

                            <option value="Male">
                                Male
                            </option>

                            <option value="Female">
                                Female
                            </option>

                            <option value="Other">
                                Other
                            </option>

                        </select>

                        <input
                            type="date"
                            name="dob"
                            value={
                                form.dob
                            }
                            onChange={
                                handleChange
                            }
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                            "
                        />

                        <input
                            name="city"
                            value={
                                form.city
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="City"
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                            "
                        />

                        <input
                            name="state"
                            value={
                                form.state
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="State"
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                            "
                        />

                        <input
                            name="country"
                            value={
                                form.country
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Country"
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                            "
                        />

                        <textarea
                            rows={4}
                            name="address"
                            value={
                                form.address
                            }
                            onChange={
                                handleChange
                            }
                            placeholder="Address"
                            className="
                                bg-slate-800
                                p-3
                                rounded-xl
                                text-white
                                md:col-span-2
                            "
                        />

                    </div>

                    <div
                        className="
                            flex
                            justify-end
                            mt-8
                        "
                    >

                        <button
                            onClick={
                                handleSubmit
                            }
                            disabled={
                                loading
                            }
                            className="
                                px-6
                                py-3
                                rounded-xl
                                bg-[#1890C8]
                                text-white
                                font-semibold
                                min-w-48
                            "
                        >
                            {
                                loading
                                    ? "Updating..."
                                    : "Update Profile"
                            }
                        </button>

                    </div>

                </div>

            </div>

        </StudentLayout>

    );
}