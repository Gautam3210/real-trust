import { useEffect, useState } from "react";
import "./Subscriber.css";

function Subscriber() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    // Dummy data; replace with actual API call
    const dummySubscribers = [
      { id: 1, email: "john@example.com" },
      { id: 2, email: "jane@example.com" },
      { id: 3, email: "doe@example.com" },
    ];

    setSubscribers(dummySubscribers);
  }, []);

  return (
    <div className="subscriber-container">
      <h2 className="subscriber-heading">Newsletter Subscribers</h2>

      <table className="subscriber-table">
        <thead>
          <tr>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.length === 0 ? (
            <tr>
              <td className="no-data">No subscribers yet.</td>
            </tr>
          ) : (
            subscribers.map((subscriber) => (
              <tr key={subscriber.id}>
                <td>{subscriber.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Subscriber;
