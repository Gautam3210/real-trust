import { useEffect, useState } from "react";
import axios from "axios";
import "./Client.css";

function Client() {
  const [clients, setClients] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    axios.get(backendUrl+"/api/get-clients")
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.error("Error fetching clients:", err);
      });
  }, []);

  return (
    <section className="client-section">
      <h2 className="client-heading">Happy Clients</h2>

      <div className="client-list">
        {clients.map((client) => (
          <div key={client._id} className="client-card">
            <img src={client.imageUrl} alt={client.clientName} className="client-image-circle" />
            <p className="client-description">{client.clientDescription}</p>
            <h3 className="client-name">{client.clientName}</h3>
            <p className="client-designation">{client.clientDesignation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Client;
