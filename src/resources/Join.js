
import "./Join.css"; // Make sure you have the Join.css file with the appropriate styles.

function Join() {
  return (
    <div className="join-page">
      <h1>Want to join CKI?</h1>
      <p className="description">
        You can begin by attending events and GBMs, listed on our calendar.
      </p>

      <div className="requirements">
        <h2>To become a permanent member, you must:</h2>
        <p>
          Attend at least 1 service event <span className="icon">🤝</span>
        </p>
        <p>
          Attend at least 1 social event <span className="icon">🎉</span>
        </p>
        <p>
          Pay school member dues once every academic year <span className="icon">💳</span> 
        </p>
      </div>
    </div>
  );
}

export default Join;
