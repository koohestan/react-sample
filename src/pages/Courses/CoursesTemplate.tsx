import React from "react";
import type { Course } from "../../types/Course";

interface Props {
  courses: Course[];
  onDelete: (id: number) => void;
}

const CoursesTemplate: React.FC<Props> = ({ courses, onDelete }) => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-700">
        🎓 مدیریت دوره‌ها - Computer Academy
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`bg-gradient-to-br ${course.color} text-white rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300`}
          >
            <h3 className="text-2xl font-bold mb-3 drop-shadow-sm">{course.title}</h3>
            <p className="text-sm mb-1 opacity-90">
              👩‍🏫 مدرس: <span className="font-medium">نازدار پیش بین</span>
            </p>
            <p className="text-sm mb-1 opacity-90">
              🕒 تعداد جلسات: <span className="font-medium">{course.sessions}</span>
            </p>
            <p className="text-lg font-semibold mt-3">{course.price.toLocaleString()} تومان</p>

            <div className="flex justify-between mt-6">
              <button className="px-4 py-1.5 text-sm bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-100 transition">
                ویرایش
              </button>
              <button
                onClick={() => onDelete(course.id)}
                className="px-4 py-1.5 text-sm bg-red-600 text-white font-medium rounded-lg shadow hover:bg-red-700 transition"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesTemplate;
