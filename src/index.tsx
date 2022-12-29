import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import "./pico.css";
import Notfound from "./Notfound";
import Drawer from "./components/Drawer";
import Nav from "./components/Nav";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TestForm from "./pages/testform/TestForm";
import Mypage from "./pages/mypage/Mypage";
import Qlists from "./pages/qlists/Qlists";
import Root from "./pages/root/Root";
import ProfileEdit from "./pages/mypage/profileEdit/ProfileEdit";

const rootContainer = document.getElementById("root")!;

const root = ReactDOM.createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Drawer>
        <Nav />
        <Routes>
          <Route path="/" element={<Root />} />

          <Route path="/quizs" element={<Qlists />} />
          <Route path="/quizs/:quizId" element={<TestForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/edit" element={<ProfileEdit />} />
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Drawer>
    </BrowserRouter>
  </React.StrictMode>
);
