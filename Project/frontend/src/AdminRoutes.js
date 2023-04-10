import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import AddUser from "./pages/Admin/add-user";
import UserList from "./pages/Admin/UserList";
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
