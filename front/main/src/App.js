import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Main'; // 메인 페이지 컴포넌트
import InfoPage from './Info'; // 상세 페이지 컴포넌트

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;