import { Home } from "./Home";
import { About } from "./About";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Route, Routes } from "react-router-dom";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
};
