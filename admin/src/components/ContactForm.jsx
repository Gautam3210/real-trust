import { useEffect, useState } from "react";
import axios from "axios";
import "./ContactForm.css"; 

function ContactForm() {
  const [contacts, setContacts] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    axios.get(backendUrl+"/api/get-userInfo")
      .then((res) => {
        console.log(res)
        setContacts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
      });
  }, []);

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Form Responses</h2>

      <table className="contact-table">
        <thead>
          <tr>
            <th>Full Name</th> 
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-data">No contact form responses yet.</td>
            </tr>
          ) : (
            contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.mobile}</td>
                <td>{contact.address}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ContactForm;
