import { Routes, Route, useNavigate } from "react-router-dom";
import { Project01 } from "./Project01";
import { Project02 } from "./Project02";
import { Project03 } from "./Project03";
// https://bobbyhadz.com/blog/react-onclick-redirect

export const Projects = () => {
  const navigate = useNavigate();

  const project01 = () => {
    // 👇️ Navigate to /contacts
    navigate("/projects/project01");
  };

  const project02 = () => {
    // 👇️ Navigate to /
    navigate("/projects/project02");
  };

  const project03 = () => {
    // 👇️ Navigate to /
    navigate("/projects/project03");
  };

  return (
    <>
      <h2 className="d-flex justify-content-center">Projects</h2>
      <br />
      <div className="container d-flex justify-content-center">
        <div className="row align-items-center">
          <div className="col">
            <button onClick={project01}>Project01</button>
          </div>
          <div className="col">
            <button onClick={project02}>Project02</button>
          </div>
          <div className="col">
            <button onClick={project03}>Project03</button>
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex container justify-content-center">
        <Routes>
          <Route path="/project01" element={<Project01 />} />
          <Route path="/project02" element={<Project02 />} />
          <Route path="/project03" element={<Project03 />} />
        </Routes>
      </div>
    </>
  );
};
