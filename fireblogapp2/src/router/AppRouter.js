import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Login } from "../pages/LoginRegister";
import { Register } from "../pages/LoginRegister";
import Dashboard from "../pages/Dashboard";
import UpdateBlog from "../pages/UpdateBlog";
import Detail from "../pages/Detail";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import { useAuth } from "../context/AuthContextProvider";

const AppRouter = () => {
  const { currentUser } = useAuth();
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" exact element={<Dashboard />} />
        {currentUser ? (
          <React.Fragment>
            <Route path="/profile" element={<Profile />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/update-blog/:id" element={<UpdateBlog />} />
            <Route path="/detail/:id" element={<Detail />} />
          </React.Fragment>
        ) : (
          <Route path="*" element={<Navigate to="/register" />} />
        )}
      </Routes>
    </React.Fragment>
  );
};

export default AppRouter;

/* old switch structure
const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Dashboard} />

        <PrivateRouter path="/profile" component={Profile} />
        <PrivateRouter path="/new-blog" component={NewBlog} />
        <PrivateRouter path="/update-blog/:id" component={UpdateBlog} />
        <PrivateRouter path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}; 

export default AppRouter;*/
