import React, { FunctionComponent } from "react";
import styled from "styled-components";
import DashboardItem from "./DashboardItem";
import { DBItemProps } from "./types";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 400px) 1fr 1fr;
  grid-gap: 10px;
  padding: 20px;
`;

const DashboardItems: DBItemProps[] = [
  {
    id: "23123",
    title: "Clock",
    description: "Check out my Clock with only HTML and CSS",
    imageURL: "../static/images/background_main.jpg",
    destinationURL: "/clock",
  },
  {
    id: "231s23",
    title: "LOL",
    description: "Check out my Clock with only HTML and CSS",
    imageURL: "../static/images/background_main.jpg",
    destinationURL: "/clock",
  },
  {
    id: "23asd1s23",
    title: "LOL",
    description: "Check out my Clock with only HTML and CSS",
    imageURL: "../static/images/background_main.jpg",
    destinationURL: "/clock",
  },
  {
    id: "23asdasd1s23",
    title: "LOL",
    description: "Check out my Clock with only HTML and CSS",
    imageURL: "../static/images/background_main.jpg",
    destinationURL: "/clock",
  },
];

const Dashboard: FunctionComponent = ({}) => {
  return (
    <GridLayout>
      {DashboardItems.map(({ id, ...rest }) => (
        <DashboardItem key={id} id={id} {...rest} />
      ))}
    </GridLayout>
  );
};

export default Dashboard;
