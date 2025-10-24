import React, { useState } from "react";
import type { Course } from "../../types/Course";
import CoursesTemplate from "./CoursesTemplate";

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, title: "آموزش React", sessions: 12, price: 850000, color: "from-blue-400 to-blue-600" },
    { id: 2, title: "TypeScript از صفر تا صد", sessions: 10, price: 790000, color: "from-sky-400 to-sky-600" },
    { id: 3, title: "طراحی با Tailwind CSS", sessions: 8, price: 690000, color: "from-cyan-400 to-cyan-600" },
    { id: 4, title: "آموزش Angular 19", sessions: 14, price: 950000, color: "from-red-400 to-red-600" },
    { id: 5, title: "آموزش CSS پیشرفته", sessions: 9, price: 650000, color: "from-pink-400 to-pink-600" },
    { id: 6, title: "آموزش HTML کاربردی", sessions: 6, price: 550000, color: "from-orange-400 to-orange-600" },
  ]);

  const handleDelete = (id: number) => setCourses(courses.filter((c) => c.id !== id));

  return <CoursesTemplate courses={courses} onDelete={handleDelete} />;
};

export default Courses;
