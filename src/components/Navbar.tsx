import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row justify-between items-center" dir="rtl">
      <h1 className="text-2xl font-bold mb-2 sm:mb-0">Computer Academy</h1>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
        <Link to="/" className="hover:underline">خانه</Link>
        <Link to="/courses" className="hover:underline">دوره‌ها</Link>
        <Link to="/users" className="hover:underline">کاربران</Link>
        <Link to="/register" className="hover:underline">ثبت‌نام</Link>
      </div>
    </nav>
  );
}
