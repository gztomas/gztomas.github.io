import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import "normalize.css";
import { ReactElement } from "react";
import { Github, LinkedIn, StackOverflow, Twitter } from "../src/icons";

const ICON_SIZE = "24";

const IndexPage = (): ReactElement => (
  <Root>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap");
      `}
    />
    <Splash>
      <H1>gztomas</H1>
      <Footer>
        <a href="https://twitter.com/_gztomas">
          <Twitter width={ICON_SIZE} />
        </a>
        <a href="https://www.linkedin.com/in/gztomas/">
          <LinkedIn width={ICON_SIZE} />
        </a>
        <a href="https://github.com/gztomas">
          <Github width={ICON_SIZE} />
        </a>
        <a href="https://stackoverflow.com/users/1216712/gztomas">
          <StackOverflow width={ICON_SIZE} />
        </a>
      </Footer>
    </Splash>
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
const Splash = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: right;
`;
const H1 = styled.h1`
  font-family: Inconsolata, sans-serif;
  font-size: 100px;
  color: white;
  margin: 0;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-left: auto;

  svg {
    padding: 4px;
    background-color: white;
    margin: 8px;
    border-radius: 4px;
  }
`;

export default IndexPage;
