"use client";

import { useRouter } from "next/navigation";
import {
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import Image from "next/image";

export default function HomePage() {

  const router = useRouter();

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
                    max-w-5xl
                "
      >

        {/* Header */}

        <div className="text-center mb-14">

          <div
            className="
            flex
            items-center
            justify-center
            gap-4
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

            <h1
              className="
                text-6xl
                font-black
            "
            >
              <span className="text-[#1890C8]">
                Edu
              </span>

              <span className="text-white">
                Sync
              </span>
            </h1>

          </div>

          <p
            className="
            text-slate-400
            mt-5
            text-lg
        "
          >
            Student Management System
          </p>

        </div>

        {/* Cards */}

        <div
          className="
                        grid
                        md:grid-cols-2
                        gap-8
                    "
        >

          {/* Student */}

          <button
            onClick={() =>
              router.push(
                "/student/login"
              )
            }
            className="
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900/80
                            p-10
                            text-left
                            hover:border-[#1890C8]
                            hover:-translate-y-2
                            transition-all
                        "
          >

            <div
              className="
                                w-20
                                h-20
                                rounded-2xl
                                bg-[#1890C8]/20
                                flex
                                items-center
                                justify-center
                                text-[#1890C8]
                                mb-6
                            "
            >

              <HiOutlineAcademicCap
                size={40}
              />

            </div>

            <h2
              className="
                                text-3xl
                                font-bold
                                text-white
                            "
            >
              Student Portal
            </h2>

            <p
              className="
                                text-slate-400
                                mt-3
                            "
            >
              Access your profile,
              activities, settings
              and academic information.
            </p>

          </button>

          {/* Admin */}

          <button
            onClick={() =>
              router.push(
                "/login"
              )
            }
            className="
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900/80
                            p-10
                            text-left
                            hover:border-[#1890C8]
                            hover:-translate-y-2
                            transition-all
                        "
          >

            <div
              className="
                                w-20
                                h-20
                                rounded-2xl
                                bg-[#1890C8]/20
                                flex
                                items-center
                                justify-center
                                text-[#1890C8]
                                mb-6
                            "
            >

              <HiOutlineShieldCheck
                size={40}
              />

            </div>

            <h2
              className="
                                text-3xl
                                font-bold
                                text-white
                            "
            >
              Admin Portal
            </h2>

            <p
              className="
                                text-slate-400
                                mt-3
                            "
            >
              Manage students,
              notifications,
              analytics and settings.
            </p>

          </button>

        </div>

      </div>

    </div>
  );
}