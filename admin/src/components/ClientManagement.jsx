import { useState } from "react";
import "./ClientManagement.css";

function ClientManagement() {
  const [clientName, setClientName] = useState("");
  const [clientDescription, setClientDescription] = useState("");
  const [clientDesignation, setClientDesignation] = useState("");
  const [clientImage, setClientImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setClientImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clientName || !clientDescription || !clientDesignation || !clientImage) {
      alert("Please fill all fields");
      return;
    }

    console.log({
      clientName,
      clientDescription,
      clientDesignation,
      clientImage,
    });

    alert("Client added successfully!");

    // Reset form
    setClientName("");
    setClientDescription("");
    setClientDesignation("");
    setClientImage(null);
    setPreview(null);
  };

  return (
    <div className="client-container">
      <h2 className="client-heading">Add New Client</h2>

      <form onSubmit={handleSubmit} className="client-form">
        {/* Image Upload */}
        <label className="client-label">Client Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" className="client-image-preview" />}

        {/* Name */}
        <label className="client-label">Client Name</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="client-input"
          placeholder="Enter client name"
        />

        {/* Description */}
        <label className="client-label">Client Description</label>
        <textarea
          value={clientDescription}
          onChange={(e) => setClientDescription(e.target.value)}
          className="client-textarea"
          placeholder="Enter client description"
        />

        {/* Designation */}
        <label className="client-label">Client Designation</label>
        <input
          type="text"
          value={clientDesignation}
          onChange={(e) => setClientDesignation(e.target.value)}
          className="client-input"
          placeholder="Ex: CEO, Web Developer"
        />

        {/* Submit */}
        <button type="submit" className="client-button">Add Client</button>
      </form>
    </div>
  );
}

export default ClientManagement;
