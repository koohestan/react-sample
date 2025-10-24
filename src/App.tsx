import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Users from "./pages/Users";
import Register from "./pages/Register";
// import Home from "./pages/Home/Home";
// import Courses from "./pages/Courses/Courses";
// import Users from "./pages/Users";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import Users from "./pages/Users";
// import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/users" element={<Users />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
