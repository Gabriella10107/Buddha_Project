import React from 'react';
import { Link } from 'react-router-dom';

function News() {
  const newsList = [
    {
      id: 1,
      title: 'Vesak Day Celebration',
      date: '2025-05-23',
      summary: 'Join us for a day of meditation, chanting, and lantern lighting to celebrate the birth, enlightenment, and passing of the Buddha.',
      image: './assets/images/3b.JPG',
    },
    {
      id: 2,
      title: 'Dhamma Talk: Mindfulness in Daily Life',
      date: '2025-06-15',
      summary: 'A special talk by Venerable Ajahn Chah on integrating mindfulness into your everyday routine.',
      image: './assets/images/3.JPG',
    },
    {
      id: 3,
      title: 'Pagoda Renovation Update',
      date: '2025-06-01',
      summary: 'The golden stupa restoration is progressing well. Thank you for your continued support and donations.',
      image: './assets/images/2.JPG',
    },
    {
      id: 4,
      title: "Children's Summer Retreat",
      date: '2025-07-10',
      summary: 'A week-long retreat for children to learn about Buddhist values, meditation, and compassion.',
      image: './assets/images/1.JPG',
    },
  ];

  return (
   <section className="news">
  <div className="news-container">
    <h3 className="news-title">Buddha Pagoda News</h3>
    
    <div className="news-list">
      {newsList.map((item) => (
        <article key={item.id} className="news-item">
          <div className="news-image-container">
            <img 
              src={item.image} 
              alt={item.title} 
              className="news-image"
              loading="lazy" // Add lazy loading
            />
          </div>
          <div className="news-content">
            <time className="news-date">{item.date}</time>
            <h3 className="news-item-title">{item.title}</h3>
            <p className="news-summary">{item.summary}</p>
            <Link to={`/news/newsdetails/${item.id}`} className="news-link">
              Read more →
            </Link>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
  );
}

export default News;