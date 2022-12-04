import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import UpdateUser from "./pages/updateUser/UpdateUser";
import AddUser from "./pages/addUser/AddUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user-profile/:id" element={<Profile />}></Route>
        <Route path="/update-user/:id" element={<UpdateUser />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
