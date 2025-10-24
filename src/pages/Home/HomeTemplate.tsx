import React from "react";

import CourseCard from "../../components/CourseCard";
import type { Course } from "../../types/Course";

interface Props {
  courses: Course[];
}

const HomeTemplate: React.FC<Props> = ({ courses }) => {
  return (
    <div className="p-6 min-h-screen bg-gray-50" dir="rtl">
      <h2 className="text-3xl font-extrabold text-center mb-10 text-blue-700">
        🎓 دوره‌های آموزشگاه
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default HomeTemplate;
