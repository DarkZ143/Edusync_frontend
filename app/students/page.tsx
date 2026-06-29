/* eslint-disable react-hooks/immutability */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import ViewStudentDrawer
    from "@/components/students/ViewStudentDrawer";
import EditStudentModal
    from "@/components/students/EditStudentModal";
import DeleteStudentModal
    from "@/components/students/DeleteStudentModal";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StudentCard from "@/components/students/StudentCard";
import AddStudentModal from "@/components/students/AddStudentModal";

import { getStudents } from "@/services/student.service";

export default function StudentsPage() {
    const [students, setStudents] = useState<any[]>([]);
    const [search, setSearch] = useState("");
    const [selectedStudent, setSelectedStudent] =
        useState<any>(null);

    const [showDrawer, setShowDrawer] =
        useState(false);

    const [showAddModal, setShowAddModal] =
        useState(false);
    const [showEditModal, setShowEditModal] =
        useState(false);

    const [editingStudent, setEditingStudent] =
        useState<any>(null);
    const [showDeleteModal, setShowDeleteModal] =
        useState(false);

    const [deletingStudent, setDeletingStudent] =
        useState<any>(null);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        try {
            const data = await getStudents();
            setStudents(data.data);
        } catch (error) {
            console.error(error);
        }
    };



    const filteredStudents = students.filter(
        (student) =>
            student.first_name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            student.last_name
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            student.student_id
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            student.course
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||

            student.email
                ?.toLowerCase()
                .includes(search.toLowerCase())
    );


    return (
        <DashboardLayout>

            <div className="p-6">

                {/* Header */}

                <div className="flex justify-between items-center mb-6">

                    <div>

                        <h1 className="text-3xl font-bold text-white">
                            Students
                        </h1>

                        <p className="text-slate-400 mt-1">
                            Manage student records
                        </p>

                    </div>

                    <button
                        onClick={() =>
                            setShowAddModal(true)
                        }
                        className="
                            bg-[#1890C8]
                            px-5
                            py-3
                            rounded-xl
                            text-white
                            font-medium
                            hover:opacity-90
                            transition
                        "
                    >
                        + Add Student
                    </button>

                </div>

                {/* Search */}

                <div
                    className="
                        mb-6
                        bg-slate-900
                        border
                        border-slate-800
                        rounded-2xl
                        p-4
                    "
                >

                    <input
                        type="text"
                        placeholder="Search students by name, ID, course, email..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="
                            w-full
                            bg-transparent
                            outline-none
                            text-white
                            placeholder:text-slate-500
                        "
                    />

                </div>

                {/* Results Count */}

                <div className="mb-4">

                    <p className="text-slate-400">
                        Showing{" "}
                        <span className="text-white font-semibold">
                            {filteredStudents.length}
                        </span>{" "}
                        student(s)
                    </p>

                </div>

                {/* Student Grid */}

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        gap-6
                    "
                >

                    {filteredStudents.length > 0 ? (

                        filteredStudents.map((student) => (

                            <StudentCard
                                key={student.id}
                                student={student}
                                onView={(student) => {
                                    setSelectedStudent(student);
                                    setShowDrawer(true);
                                }}
                                onEdit={(student) => {
                                    setEditingStudent(student);
                                    setShowEditModal(true);
                                }}
                                onDelete={(student) => {
                                    setDeletingStudent(student);
                                    setShowDeleteModal(true);
                                }}
                            />

                        ))

                    ) : (

                        <div
                            className="
                                col-span-full
                                text-center
                                py-16
                            "
                        >

                            <h2
                                className="
                                    text-xl
                                    text-slate-300
                                "
                            >
                                No students found
                            </h2>

                            <p
                                className="
                                    text-slate-500
                                    mt-2
                                "
                            >
                                Try another search keyword
                            </p>

                        </div>

                    )}

                </div>

            </div>

            <AddStudentModal
                open={showAddModal}
                onClose={() =>
                    setShowAddModal(false)
                }
                onSuccess={loadStudents}
            />
            <ViewStudentDrawer
                open={showDrawer}
                student={selectedStudent}
                onClose={() =>
                    setShowDrawer(false)
                }
            />
            <EditStudentModal
                open={showEditModal}
                student={editingStudent}
                onClose={() =>
                    setShowEditModal(false)
                }
                onSuccess={loadStudents}
            />
            <DeleteStudentModal
                open={showDeleteModal}
                student={deletingStudent}
                onClose={() =>
                    setShowDeleteModal(false)
                }
                onSuccess={loadStudents}
            />
        </DashboardLayout>
    );
}