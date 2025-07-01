import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";

import "./Projects.css";

const Projects = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      axios
        .get(backendUrl + "/api/get-projects")
        .then((res) => {
          setProjects(res.data);
        })
        .catch((err) => console.error("Error fetching projects:", err));
    };

    loadData();
  }, []);

  return (
    <section className="project-section">
      <h2 className="project-heading">Our Projects</h2>
      <p className="project-subtext">
        We know what buyers are looking for and suggest projects that will bring{" "}
        <br />
        clients top dollar for the sale of their homes.
      </p>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.projectName}
              className="project-image"
            />
            <h3 className="project-title">{project.projectName}</h3>
            <p className="project-desc">{project.projectDescription}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
