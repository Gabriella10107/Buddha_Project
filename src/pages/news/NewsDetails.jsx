import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// Default news item data
const defaultNewsItem = {
  title: 'Vesak Day Celebration',
  date: 'MAY 23, 2025',
  summary: 'Join us for a day of meditation, chanting, and lantern lighting to celebrate the birth, enlightenment, and passing of the Buddha.',
  image: '/assets/images/1.JPG',
  details: `
    <p>The upcoming Vesak Day celebration promises to be a deeply moving experience for all who attend. The day will begin at <strong>9 AM</strong> with a guided group meditation session led by visiting monks from Thailand, focusing on loving-kindness (Metta).</p>
    <p>Following the meditation, there will be continuous chanting of sacred texts throughout the day. We encourage devotees to bring their own candles and lanterns for the evening's grand illumination ceremony, which will commence at sunset.</p>
    <h4>Event Schedule:</h4>
    <ul>
      <li><strong>9:00 AM:</strong> Guided Meditation</li>
      <li><strong>11:00 AM:</strong> Dhamma Talk</li>
      <li><strong>1:00 PM:</strong> Vegetarian Lunch (Dana)</li>
      <li><strong>3:00 PM:</strong> Chanting Session</li>
      <li><strong>6:30 PM:</strong> Lantern Lighting Ceremony</li>
    </ul>
    <p>This event is open to everyone, regardless of background or experience. Come and share in the peace and joy of this auspicious day.</p>
  `
};

function NewsDetails({ newsItem = defaultNewsItem, onBackClick }) {



    const navigate = useNavigate();
  // Handle back navigation with a fallback if no handler is provided
const handleBackClick = () => {
  if (onBackClick) {
    onBackClick();
  } else {
    navigate('/news'); // Go back to news list
  }
};
  return (
    <div className="news-details-page">
      <article className="details-container">
        <header className="details-header">
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="header-image" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = '/assets/images/default-news.jpg';
            }}
          />
          <div className="header-overlay">
            <p className="details-date">{newsItem.date}</p>
            <h1 className="details-title">{newsItem.title}</h1>
          </div>
        </header>

        <div className="details-body">
          <p className="details-summary">
            {newsItem.summary}
          </p>
          
          <hr className="divider" />

          <div 
            className="full-details" 
            dangerouslySetInnerHTML={{ __html: newsItem.details }} 
          />
        </div>

        <footer className="details-footer">
          <button 
            onClick={handleBackClick} 
            className="back-button"
            aria-label="Back to all news"
          >
            ← Back to All News
          </button>
        </footer>
      </article>
    </div>
  );
}

NewsDetails.propTypes = {
  newsItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired
  }),
  onBackClick: PropTypes.func
};

export default NewsDetails;