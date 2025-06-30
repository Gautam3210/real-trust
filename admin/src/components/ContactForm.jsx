import { useEffect, useState } from "react";
import "./ContactForm.css"; // Import CSS

function ContactForm() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Dummy data, replace with API call (e.g., fetch('/api/contacts'))
    const dummyData = [
      {
        id: 1,
        fullName: "Ravi Kumar",
        email: "ravi@example.com",
        mobile: "9876543210",
        city: "Delhi",
      },
      {
        id: 2,
        fullName: "Neha Sharma",
        email: "neha@example.com",
        mobile: "9123456780",
        city: "Mumbai",
      },
      {
        id: 3,
        fullName: "Amit Patel",
        email: "amit@example.com",
        mobile: "9012345678",
        city: "Ahmedabad",
      },
    ];

    setContacts(dummyData);
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
              <tr key={contact.id}>
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td>{contact.mobile}</td>
                <td>{contact.city}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ContactForm;
