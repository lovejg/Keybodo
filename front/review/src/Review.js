import React, { useState } from 'react';
import { database } from './firebase_DB';
import { ref, push, set, serverTimestamp } from 'firebase/database';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Review.css';

const RatingWithReview = ({ totalStars = 5, initialRating = 1 }) => { // 5점 만점, 최소는 1점(초기값)
  const [rating, setRating] = useState(initialRating);
  const [review, setReview] = useState('');

  const handleSetRating = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Firebase Realtime Database에 리뷰 데이터 저장
    const reviewRef = push(ref(database, 'reviews')); // 'reviews'는 데이터를 저장할 경로
    set(reviewRef, {
      rating,
      review,
      createdAt: serverTimestamp() // 리뷰 생성 시간(걍 기본데이터로 많이 쓰이길래 넣어봄)
    }).then(() => {
      toast.success('제출 성공!', { // 토스트 메세지로 제출 성공 표시
        onClose: () => { // 닫기 버튼 누를 시에
          window.location.reload(); // 페이지 새로고침
        } // onClose가 아닌 setTimeout으로 delay를 주면 토스트 메세지를 무시하고 새로고침 되는 문제가 생겼음
      });
    }).catch(error => { // 에러 발생 시
      toast.error('제출 실패: ' + error.message); // 토스트 메세지로 에러 표시
    });
  };

  return (
    <div className="rating-review-container">
      <div className="rating">
        {[...Array(totalStars)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleSetRating(ratingValue)}
              />
              <span
                className={`star ${ratingValue <= rating ? 'filled' : ''}`}
                role="img"
                aria-label="star"
              >★</span>
            </label>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          placeholder="리뷰를 작성해주세요...."
          value={review}
          onChange={handleReviewChange}
          className="review-textarea"
          required
        ></textarea>
        <button type="submit" className="submit-btn">제출</button>
      </form>
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );  
};

export default RatingWithReview;