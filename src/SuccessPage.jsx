import React from 'react';
import './success.css';

function SuccessPage() {
  return (
    <div>
      <h1>Task added Successfully!</h1>
      <p>Please visit home page and check in dashboard for the reports</p>
      <p>Have a great day! 😊</p>
      <button onClick={() => window.location.href = 'index.html'}>See Reports</button>
    </div>
  );
}

export default SuccessPage;
