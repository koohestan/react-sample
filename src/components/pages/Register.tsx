import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  course: string;
}

export default function Register() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", course: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ثبت‌نام با موفقیت انجام شد برای ${form.name}`);
    setForm({ name: "", email: "", course: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">فرم ثبت‌نام</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="نام"
        className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="ایمیل"
        className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="course"
        value={form.course}
        onChange={handleChange}
        placeholder="نام دوره"
        className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 transition">
        ثبت‌نام
      </button>
    </form>
  );
}
