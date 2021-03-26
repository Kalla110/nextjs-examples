import { FunctionComponent } from "react";
import styled from "styled-components";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import { LinkType } from "./types";

const Container = styled.div`
  display: flex;
  /* position: fixed;
  top: 0; */
  width: 100%;
  height: 80px;
  padding: 20px 15%;
  justify-content: flex-start;
  align-items: stretch;
  border-bottom: 1px solid;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const Links: LinkType[] = [
  {
    key: "cjsdnjscdn",
    title: "Dashboard",
    destination: "/",
  },
];

const Navigation: FunctionComponent = ({}) => {
  return (
    <Container>
      <LinkContainer>
        {Links.map(({ key, ...rest }) => (
          <NavigationLink key={key} {...rest} />
        ))}
      </LinkContainer>
    </Container>
  );
};

export default Navigation;
