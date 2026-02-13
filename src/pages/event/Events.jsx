import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import pagodaImage1 from '/assets/images/1.JPG';
import pagodaImage2 from '/assets/images/2.JPG';
import pagodaImage3 from '/assets/images/3.JPG';
import pagodaImage4 from '/assets/images/4.JPG';
import pagodaImage5 from '/assets/images/5.JPG';

function Events() {
  const navigate = useNavigate();

  const eventsList = [
    {
      id: 1,
      title: 'Vesak Day Celebration',
      date: 'May 23, 2025',
      summary: 'Join us for meditation, chanting, and lantern lighting to celebrate the birth, enlightenment, and passing of the Buddha.',
      image: pagodaImage1,
      time: '9:00 AM - 7:00 PM'
    },
    {
      id: 2,
      title: 'Dhamma Talk: Mindfulness',
      date: 'Jun 15, 2025',
      summary: 'Special talk by Venerable Ajahn Chah on integrating mindfulness into daily routine.',
      image: pagodaImage2,
      time: '2:00 PM - 4:00 PM'
    },
    {
      id: 3,
      title: 'Pagoda Renovation Update',
      date: 'Jun 1, 2025',
      summary: 'Golden stupa restoration progress report. Thank you for your support and donations.',
      image: pagodaImage3,
      time: '10:00 AM - 12:00 PM'
    },
    {
      id: 4,
      title: "Children's Summer Retreat",
      date: 'Jul 10-17, 2025',
      summary: 'Week-long retreat for children to learn Buddhist values, meditation, and compassion.',
      image: pagodaImage4,
      time: '8:00 AM - 3:00 PM Daily'
    },
    {
      id: 5,
      title: 'Volunteer Appreciation',
      date: 'Aug 5, 2025',
      summary: 'Honoring our volunteers with special puja and lunch. RSVP required.',
      image: pagodaImage5,
      time: '11:00 AM - 2:00 PM'
    }
  ];

  return (
    <div className="events-section">
      <div className="container">
        <h2 className="events-title">Buddha Pagoda Events</h2>
        <div className="events-table-container">
          {/* Desktop Table */}
          <table className="buddha-events-table desktop-view">
            <thead>
              <tr>
                <th>Image</th>
                <th>Event Details</th>
                <th>Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {eventsList.map((event) => (
                <tr key={`desktop-${event.id}`}>
                  <td className="events-image-cell">
                    <div className="pagoda-image-frame">
                      <img src={event.image} alt={event.title} loading="lazy" />
                    </div>
                  </td>
                  <td className="events-details-cell">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-summary">{event.summary}</p>
                  </td>
                  <td className="events-time-cell">
                    <div className="date">{event.date}</div>
                    <div className="time">{event.time}</div>
                  </td>
                  <td className="events-action-cell">
                    <Link to={`/events/eventsdetails/${event.id}`} className="see-more-btn">
                      <span>Details</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="mobile-view">
            {eventsList.map((event) => (
              <div className="event-card" key={`mobile-${event.id}`}>
                <div className="card-image">
                  <div className="pagoda-image-frame">
                    <img src={event.image} alt={event.title} loading="lazy" />
                  </div>
                </div>
                <div className="card-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <div className="date-time">
                      <span className="date">{event.date}</span>
                      <span className="time">{event.time}</span>
                    </div>
                  </div>
                  <p className="event-summary">{event.summary}</p>
                  <button
                    className="see-more-btn"
                    onClick={() => navigate(`/events/eventsdetails/${event.id}`)}
                  >
                    <span>Details</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;