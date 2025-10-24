import React from "react";
import type { Course } from "../types/Course";
// import { Course } from "../types/Course";

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className={`bg-gradient-to-br ${course.color} text-white rounded-2xl shadow-lg p-5`}>
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-sm mb-1">
        👩‍🏫 مدرس: <span className="font-medium">نازدار پیشبین</span>
      </p>
      <p className="text-sm mb-1">
        🕒 تعداد جلسات: <span className="font-medium">{course.sessions}</span>
      </p>
      <p className="text-lg font-semibold mt-2">
        💰 {course.price.toLocaleString()} تومان
      </p>
    </div>
  );
};

export default CourseCard;
