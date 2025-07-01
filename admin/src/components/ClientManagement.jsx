import { useState } from "react";
import axios from "axios";
import "./ClientManagement.css";


function ClientManagement() {
  const [clientName, setClientName] = useState("");
  const [clientDescription, setClientDescription] = useState("");
  const [clientDesignation, setClientDesignation] = useState("");
  const [clientImage, setClientImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setClientImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!clientName || !clientDescription || !clientDesignation || !clientImage) {
      alert("Please fill all fields");
      return;
    }
  
    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("clientDescription", clientDescription);
    formData.append("clientDesignation", clientDesignation);
    formData.append("clientImage", clientImage);
  
    try {
      const {data} = await axios.post(backendUrl+"/api/post-clients", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      
      alert("Client added successfully!");
  
      setClientName("");
      setClientDescription("");
      setClientDesignation("");
      setClientImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error uploading client:", error);
      alert("Error uploading client.");
    }
  };

  return (
    <div className="client-container">
      <h2 className="client-heading">Add New Client</h2>

      <form onSubmit={handleSubmit} className="client-form">
        
        <label className="client-label">Client Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && <img src={preview} alt="Preview" className="client-image-preview" />}

        <label className="client-label">Client Name</label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="client-input"
          placeholder="Enter client name"
        />

       
        <label className="client-label">Client Description</label>
        <textarea
          value={clientDescription}
          onChange={(e) => setClientDescription(e.target.value)}
          className="client-textarea"
          placeholder="Enter client description"
        />

    
        <label className="client-label">Client Designation</label>
        <input
          type="text"
          value={clientDesignation}
          onChange={(e) => setClientDesignation(e.target.value)}
          className="client-input"
          placeholder="Ex: CEO, Web Developer"
        />

        <button type="submit" className="client-button">Add Client</button>
      </form>
    </div>
  );
}

export default ClientManagement;
