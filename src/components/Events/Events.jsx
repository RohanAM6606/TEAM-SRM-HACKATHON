import React from "react";

function Events() {
  return (
    <>
      <style>{`
        .events {
          min-height: 100vh;
          padding: 4rem 2rem;
          background-color: #c0a7f7;
          text-align: center;
        }

        .events h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }

        .events-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .event-card {
          background: #060606;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: white;
        }

        .event-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .event-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .event-card p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .event-card button {
          padding: 0.6rem 1.5rem;
          border: none;
          background-color: #0b0b0b;
          color: #ffffff;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.95rem;
        }

        .event-card button:hover {
          background-color: #333333;
        }
      `}</style>

      <section id="events" className="events">
        <h2>Our Events</h2>

        <div className="events-container">
          <div className="event-card">
            <h3>Semicolon</h3>
            <p>
              A coding-focused event to sharpen problem-solving skills and
              logical thinking.
            </p>
            <button>Know More</button>
          </div>

          <div className="event-card">
            <h3>Ideathon</h3>
            <p>
              A platform to brainstorm innovative ideas and turn them into
              impactful solutions.
            </p>
            <button>Know More</button>
          </div>

          <div className="event-card">
            <h3>Hackathon</h3>
            <p>
              A competitive event where teams build real-world projects within
              limited time..
            </p>
            <button>Know More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;