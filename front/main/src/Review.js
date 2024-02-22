import React from 'react';
import RatingWithReview from './Review_main';
import { Link, useLocation } from "react-router-dom";

function Review() {
  const location=useLocation();
  const item=location.state?.info; // 제품정보 받은거
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '25px', marginBottom: '-5px', color: 'white'}}>소중한 리뷰 부탁드립니다!</h1>
      <RatingWithReview initialRating={1} item={item}/> {/* 제품 정보를 props로 전달 */}
      <Link to="/">상세 페이지로 돌아가기</Link> {/* 적절한 경로로 수정 필요 */}
    </div>
  );
}

export default Review;