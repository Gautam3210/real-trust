import { useEffect, useState } from "react";
import axios from "axios";
import "./Subscriber.css";

function Subscriber() {
  const [subscribers, setSubscribers] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(backendUrl + "/api/get-subscribe")
      .then((res) => {
        setSubscribers(res.data);
        
      })
      .catch((err) => {
        console.error("Error fetching subscribers:", err);
      });
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
              <tr key={subscriber._id}>
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
