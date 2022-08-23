import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./pico.css";
import TestForm from "./TestForm";
import Nav from "./Nav";
import Login from "./Login";
import Notfound from "./Notfound";
import Drawer from "./Drawer";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Drawer>
        <Nav />
        <Routes>
          <Route path="/" element={<TestForm />} />
          <Route path="/login/*" element={<Login />} />
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Drawer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
