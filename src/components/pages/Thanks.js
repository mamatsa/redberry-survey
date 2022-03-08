import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('progress') || localStorage.getItem('progress') < 5) {
      navigate(-1);
    } else {
      localStorage.clear();
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  });

  return (
    <div className="thanks-container">
      <h1 className="thanks-text">Thanks for Joining 😊</h1>
    </div>
  );
}

export default Thanks;
