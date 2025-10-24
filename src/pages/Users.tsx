import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState<string[]>([]);
  const [name, setName] = useState("");

  const addUser = () => {
    if (name.trim()) {
      setUsers([...users, name]);
      setName("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">مدیریت کاربران</h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          className="border p-2 rounded flex-1"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام کاربر"
        />
        <button
          onClick={addUser}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          افزودن
        </button>
      </div>
      <ul className="space-y-2">
        {users.map((user, i) => (
          <li
            key={i}
            className="border rounded p-2 bg-gray-50 hover:bg-gray-100 transition"
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}
