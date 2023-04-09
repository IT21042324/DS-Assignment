import { Routes, Route } from "react-router-dom";
import Admin from "./Admin/Admin";

import AddUser from "./Admin/add-user";
import UserList from "./Admin/UserList";

export function AdminRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />} />

        <Route path="/user" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}
