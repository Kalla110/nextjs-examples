import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const PageBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  overflow-y: auto;
`;

const PageContent = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  margin: 0 15%;
  overflow-y: scroll;
  @media (max-width: 1100px) {
    margin: 0 10%;
  }
  @media (max-width: 800px) {
    margin: 0 0%;
  }
`;

const PageContainer: FunctionComponent = ({ children }) => {
  return (
    <PageBackground>
      <Navigation />
      <PageContent>{children}</PageContent>
    </PageBackground>
  );
};

export default PageContainer;
