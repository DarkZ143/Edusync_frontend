import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    title: string;
    value: number;
    icon: ReactNode;
    href?: string;
}

export default function StatsCard({
    title,
    value,
    icon,
    href,
}: Props) {

    const card = (
        <div
            className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/80
                backdrop-blur-xl
                p-6
                transition-all
                duration-300
                hover:border-[#1890C8]
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(24,144,200,0.15)]
                cursor-pointer
            "
        >
            <div className="flex justify-between items-start">

                <div>

                    <p
                        className="
                            text-slate-400
                            text-sm
                        "
                    >
                        {title}
                    </p>

                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-white
                            mt-2
                        "
                    >
                        {value}
                    </h2>

                </div>

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
                    {icon}
                </div>

            </div>

            <div
                className="
                    absolute
                    right-0
                    top-0
                    w-24
                    h-24
                    bg-[#1890C8]/10
                    blur-3xl
                "
            />
        </div>
    );

    if (href) {
        return (
            <Link href={href}>
                {card}
            </Link>
        );
    }

    return card;
}