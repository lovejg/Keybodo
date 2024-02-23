import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/Main"; // 메인 페이지 컴포넌트
import Info from "./routes/Info"; // 상세 페이지 컴포넌트
import Review from "./routes/Review_main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> {/* 메인 페이지 라우팅 */}
        <Route path="/info/:id" element={<Info />} /> {/* 상세 페이지 라우팅 */}
        <Route path="/review/:id" element={<Review />} />
        {/* 리뷰 페이지 라우팅 */}
      </Routes>
    </Router>
  );
}

export default App;
