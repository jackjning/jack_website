import React from "react";
import styled from "@emotion/styled";

export const Links = () => {
  return (
    <Nav>
      <a href="https://github.com/jackjning">Github</a>
      <a href="https://www.linkedin.com/in/jack-ning-466bb6149/">LinkedIn</a>
    </Nav>
  );
};

const Nav = styled.nav`
  padding-top: 20px;

  a {
    text-decoration: none;
    color: black;
    margin: 5px;
  }
`;
