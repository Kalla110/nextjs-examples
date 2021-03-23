import React, { FunctionComponent } from "react";
import styled from "styled-components";

const PageBackground = styled.div`
  display: flex;
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
      <PageContent>{children}</PageContent>
    </PageBackground>
  );
};

export default PageContainer;
