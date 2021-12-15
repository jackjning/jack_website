import styled from "@emotion/styled";
import { Nav } from "./Navigate";
import { Links } from "./MediaLinks";
import { PageRoutes } from "./PageRoutes";
import { HashRouter as Router } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Box>
        <Fill>
          <Nav />
          <PageRoutes />
          <Links />
        </Fill>
      </Box>
    </Router>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  font-family: Arial;
`;

const Fill = styled.div({
  width: "700px",
  margin: "10px",
});
