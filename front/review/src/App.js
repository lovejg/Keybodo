import React from 'react';
import RatingWithReview from './Review';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>소중한 리뷰 부탁드립니다!</h1>
      <RatingWithReview initialRating={1} />
    </div>
  );
}

export default App;