import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const events = [
    { label: '🏫 Fazaia Inter College', year: '2010–2018' },
    { label: '🎒 Bahria College', year: '2018–2021' },
    { label: '📚 Bahria University ', year: '2021–2025' },
    { label: '🎓 Graduation Day!', year: 'Today 19/6/25 💖' },
  ];

  return (
    <section className="timeline-container py-5" id="timeline">
      <h2 className="text-center text-pink mb-5 fw-bold fs-2">🌸 Our Journey Together</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content shadow-sm">
              <h5 className="fw-bold">{event.label}</h5>
              <p className="text-muted mb-0">{event.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
