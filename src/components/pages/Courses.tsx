import { useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState<string[]>([]);
  const [title, setTitle] = useState("");

  const addCourse = () => {
    if (title.trim()) {
      setCourses([...courses, title]);
      setTitle("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">مدیریت دوره‌ها</h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          className="border p-2 rounded flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="نام دوره"
        />
        <button
          onClick={addCourse}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          افزودن
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((course, i) => (
          <li
            key={i}
            className="border rounded p-3 bg-gray-50 hover:bg-gray-100 transition text-center"
          >
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}
