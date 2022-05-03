import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../src/pages/Main";
import Login from "../src/components/login/login";
import UserLogin from "./pages/UserLogIn";
import Registration from "../src/components/registration/registration";
import UploadFile from "./components/upload-img/upload";
import { AuthContext } from "./context/authContext";
import { useAuth } from "./hooks/auth.hook";

function App() {
  const { login, logout, token, userId, isReady, userEmail } = useAuth();
  const isLogin = !!token;

  return (
    <div className="main">
      <AuthContext.Provider
        value={{ login, logout, token, userId, isReady, userEmail }}
      >
        {!isLogin ? (
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="upload" element={<UploadFile />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/login" element={<Navigate to="/" />} />
          </Routes>
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
