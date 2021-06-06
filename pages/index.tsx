import styled from "@emotion/styled";
import { ReactElement } from "react";
import { Github, LinkedIn, StackOverflow, Twitter } from "../src/icons";

const IndexPage = (): ReactElement => (
  <Root>
    <H1>gztomas</H1>
    <Footer>
      <a href="https://twitter.com/_gztomas">
        <Twitter width="20" />
      </a>
      <a href="https://www.linkedin.com/in/gztomas/">
        <LinkedIn width="20" />
      </a>
      <a href="https://github.com/gztomas">
        <Github width="20" />
      </a>
      <a href="https://stackoverflow.com/users/1216712/gztomas">
        <StackOverflow width="20" />
      </a>
    </Footer>
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #111212;
`;
const H1 = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
`;
const Footer = styled.footer`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

export default IndexPage;
