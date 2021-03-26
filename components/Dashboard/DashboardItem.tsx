import Link from "next/link";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { DBItemProps } from "./types";

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 5%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  cursor: pointer;
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  transition: 0.3s;
  box-shadow: none;
  :hover {
    transform: scale(1.1);
    box-shadow: rgba(255, 255, 255, 0.144) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 0px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px 0px 5px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 20px 10px;
`;

const Title = styled.h2`
  font-size: 1.2em;
  margin: 5px 20px;
`;

const Description = styled.p`
  font-size: 1em;
  margin: 5px 20px;
`;

const SplittingLine = styled.hr`
  width: 95%;
  height: 0.5px;
  align-self: center;
  opacity: 0.2;
`;

const DashboardItem: FunctionComponent<DBItemProps> = ({
  id,
  title,
  description,
  imageURL,
  destinationURL,
}) => {
  return (
    <Link href={destinationURL}>
      <Container>
        <Image src={imageURL} alt="pic" />
        <TextContainer>
          <Title>{title}</Title>
          <SplittingLine />
          <Description>{description}</Description>
        </TextContainer>
      </Container>
    </Link>
  );
};

export default DashboardItem;
