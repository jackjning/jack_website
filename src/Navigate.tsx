import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Nav = () => {
  return (
    <nav className="navBar">
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/About">About</StyledLink>
      <StyledLink to="/Resume">Resume</StyledLink>
      <StyledLink to="/Projects">Projects</StyledLink>
    </nav>
  );
};

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin: 5px;
`;
