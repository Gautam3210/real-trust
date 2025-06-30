import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectManagement from "./components/ProjectManagement";
import ClientManagement from "./components/ClientManagement";
import ContactForm from "./components/ContactForm";
import Subscriber from "./components/Subscriber";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/projects" element={<ProjectManagement />} />
        <Route path="/clients" element={<ClientManagement />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/subscribers" element={<Subscriber/>} />
      </Routes>
    </Router>
  );
}

export default App;
