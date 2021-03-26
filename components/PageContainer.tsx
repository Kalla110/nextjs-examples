import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const PageBackground = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
`;

const PageContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  margin: 0 15%;
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
