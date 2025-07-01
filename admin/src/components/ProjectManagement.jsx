import { useState } from "react";
import "./ProjectManagement.css";
import axios from "axios";

function ProjectManagement() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProjectImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectName || !projectDescription || !projectImage) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectDescription", projectDescription);
    formData.append("projectImage", projectImage);

    try {
      const { data } = await axios.post(
        backendUrl + "/api/post-projects",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Project added successfully!");

      setProjectName("");
      setProjectDescription("");
      setProjectImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Error uploading project:", error);
      alert("Error uploading project.");
    }
  };

  return (
    <div className="project-container">
      <h2 className="project-heading">Add New Project</h2>

      <form onSubmit={handleSubmit} className="project-form">
        <label className="project-label">Project Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <img src={preview} alt="Preview" className="project-image-preview" />
        )}

        <label className="project-label">Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="project-input"
          placeholder="Enter project name"
        />

        <label className="project-label">Project Description</label>
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="project-textarea"
          placeholder="Enter project description"
        />

        <button type="submit" className="project-button">
          Add Project
        </button>
      </form>
    </div>
  );
}

export default ProjectManagement;
