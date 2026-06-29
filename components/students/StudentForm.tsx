"use client";

interface StudentFormData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    gender: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    country: string;
    course: string;
    password?: string;
}

interface Props {
    form: StudentFormData;
    handleChange: (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) => void;
    showPassword?: boolean;
}

export default function StudentForm({
    form,
    handleChange,
    showPassword = true,
}: Props) {
    return (
        <div className="grid grid-cols-2 gap-4">

            <input
                name="first_name"
                placeholder="First Name *"
                value={form.first_name}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            <input
                name="last_name"
                placeholder="Last Name"
                value={form.last_name}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            <input
                type="email"
                name="email"
                placeholder="Email *"
                value={form.email}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            <input
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            >
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
                value={form.dob}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            <input
                name="course"
                placeholder="Course"
                value={form.course}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            <input
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            <input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            <input
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                "
            />

            {showPassword && (

                <input
                    type="password"
                    name="password"
                    placeholder="Password *"
                    value={form.password}
                    onChange={handleChange}
                    className="
                        bg-slate-800
                        p-3
                        rounded-xl
                        text-white
                        col-span-2
                    "
                />

            )}

            <textarea
                rows={4}
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
                className="
                    bg-slate-800
                    p-3
                    rounded-xl
                    text-white
                    col-span-2
                "
            />

        </div>
    );
}