import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main"; // 메인 페이지 컴포넌트
import Info from "./Info"; // 상세 페이지 컴포넌트

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> {/* 메인 페이지 라우팅 */}
        <Route path="/info" element={<Info />} /> {/* 상세 페이지 라우팅 */}
      </Routes>
    </Router>
  );
}

export default App;