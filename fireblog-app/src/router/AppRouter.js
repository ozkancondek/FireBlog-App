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
import { useAuth } from "../context/AuthContextProvider";

export const AppRouter = () => {
  const { currentUser } = useAuth();
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        {currentUser ? (
          <Fragment>
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/update-blog/:id" element={<UpdateBlog />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Fragment>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Fragment>
  );
};
