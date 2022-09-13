import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./pico.css";
import Notfound from "./Notfound";
import Drawer from "./components/Drawer";
import Nav from "./components/Nav";
import Login from "./pages/login/Login";
import TestForm from "./pages/testform/TestForm";
import Mypage from "./pages/mypage/Mypage";
import Qlists from "./pages/qlists/Qlists";
import ResizableBoxes from "./pages/testform/ResizableBoxes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Drawer>
        <Nav />
        <Routes>
          <Route path="/" element={<TestForm />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/mypage/*" element={<Mypage />} />
          <Route path="/qlists/*" element={<Qlists />} />
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Drawer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
