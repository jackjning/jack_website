import styled from "@emotion/styled";

export const Resume = () => {
  return (
    <Links>
      <h1>Resume</h1>
      <a href="/JackNingResume.pdf" download>
        Click here to Download
      </a>
    </Links>
  );
};

const Links = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;
