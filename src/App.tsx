import { NavigationBar } from "./components/NavigationBar";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const aboutMe = () => {
    navigate("/aboutMe");
  };

  const projects = () => {
    navigate("/projects/*");
  };

  const contactMe = () => {
    navigate("/contactMe");
  };

  return (
    <>
      <NavigationBar />
      <div className="container d-flex justify-content-center">
        <div className="row align-items-center">
          <div className="col">
            <button onClick={aboutMe}>About</button>
          </div>
          <div className="col">
            <button onClick={projects}>Projects</button>
          </div>
          <div className="col">
            <button onClick={contactMe}>Contact</button>
          </div>
        </div>
      </div>
      <br />
      <div className="container justify-content-center">
        <Routes>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/contactMe" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
