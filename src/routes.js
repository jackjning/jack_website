import { Home } from "./Home";
import { About } from "./About";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Route, Routes } from "react-router-dom";

const routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
};

export default routes;
