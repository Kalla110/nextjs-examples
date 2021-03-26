import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { FunctionComponent, useMemo, useState } from "react";
import styled from "styled-components";
import { LinkType } from "./types";

const StyledLink = styled.div<{ isActive: Boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.5s;
  font-size: 1.5em;
  :hover {
    opacity: 0.5;
  }
`;

const NavigationLink: FunctionComponent<Partial<LinkType>> = ({
  title,
  destination = "/",
}) => {
  const [isHovered, setisHovered] = useState(false);
  const { pathname } = useRouter();

  const isActive = useMemo(() => isHovered || pathname === destination, [
    isHovered,
    pathname,
  ]);

  return (
    <Link href={destination}>
      <StyledLink
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}
        isActive={isActive}
      >
        {title}
      </StyledLink>
    </Link>
  );
};

export default NavigationLink;
