import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { Detail } from "../pages/Detail";
import { NewBlog } from "../pages/NewBlog";
import { Profile } from "../pages/Profile";
import { UpdateBlog } from "../pages/UpdateBlog";

export const PrivateRouter = () => {
  const navigate = useNavigate();
  let { currentUser } = useAuth();
  let a = false;

  return a ? (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/new-blog" element={<NewBlog />} />
      <Route path="/update-blog/:id" element={<UpdateBlog />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
};
