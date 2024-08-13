import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const Banner = ({ showBanner, bannerData, onToggleBanner }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (bannerData.timer > 0) {
      setTimeLeft(bannerData.timer);
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            onToggleBanner(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [bannerData.timer, onToggleBanner]);

  if (!showBanner) return null;
  
  const backgroundStyle = bannerData.link ? {
    backgroundImage: `url(${bannerData.link})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  } : {};

  return (
    <div
      className="text-white bg-primary text-center py-4 px-3 rounded-lg shadow position-relative mt-5"
      style={backgroundStyle}
    >
      <div className='text-center'>
      <h1 className="h3 mb-3">{bannerData.description}</h1>
      {bannerData.link && (
        <a
          href={bannerData.link}
          className="btn btn-light text-primary mx-2"
        >
          Go to Link
        </a>
      )}
      {timeLeft > 0 && (
        <div className="mt-3">
          Time left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </div>
      )}
      </div>
      <button
        onClick={() => onToggleBanner(false)}
        className="btn btn-danger position-absolute top-0 end-0 m-2"
      >
        Close
      </button>
    </div>
  );
};

export default Banner;
