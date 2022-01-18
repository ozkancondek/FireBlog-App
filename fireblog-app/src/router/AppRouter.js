import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Detail } from "../pages/Detail";
import { NewBlog } from "../pages/NewBlog";
import { Profile } from "../pages/Profile";
import { UpdateBlog } from "../pages/UpdateBlog";
import Navbar from "../components/Navbar";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        {false ? (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/update-blog/:id" element={<UpdateBlog />} />
            <Route path="/detail/:id" element={<Detail />} />
          </>
        ) : (
          <Navigate to="/login" />
        )}
      </Routes>
    </>
  );
};

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/profile" element={<PrivateRouter />} />
//         <Route path="/new-blog" element={<PrivateRouter />} />
//         <Route path="/detail" element={<PrivateRouter />} />
//         <Route path="/update-blog" element={<PrivateRouter />} />
//       </Routes>
//     </>
//   );
