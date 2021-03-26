import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;

const ClockBody = styled.div`
  height: 50vh;
  width: 50vh;
  border-radius: 50%;
  border: 2px solid;
  position: relative;
`;

const ClockNumber = styled.p<{ rotation: number }>`
  position: absolute;
  font-size: 2em;
  margin: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
`;

const ClockPointerMinutes = styled.div<{ rotation: number }>`
  position: absolute;
  height: 40%;
  width: 10px;
  background-color: white;
  bottom: 50%;
  left: 50%;
  transform-origin: bottom;
  transform: translateX(-50%) rotate(0deg);
  transform: ${({ rotation }) =>
    `translateX(-50%) rotate(${rotation || 0}deg)`};
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 10;
`;

const ClockPointerHours = styled(ClockPointerMinutes)`
  height: 30%;
  width: 16px;
`;

const ClockPointerSeconds = styled(ClockPointerMinutes)`
  height: 45%;
  width: 5px;
  background-color: red;
  opacity: 0.5;
  z-index: 9;
`;

const ClockCenterDot = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 50%;
  z-index: 12;
`;

const numbers: number[] = Array.from(Array(12).keys());

const Clock: FunctionComponent = ({}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const secondsRatio = useMemo(() => (currentDate.getSeconds() / 60) * 360, [
    currentDate,
  ]);

  const minutesRatio = useMemo(() => (currentDate.getMinutes() / 60) * 360, [
    currentDate,
  ]);

  const hoursRatio = useMemo(
    () => (minutesRatio + currentDate.getHours() / 12) * 360,
    [currentDate, minutesRatio]
  );

  return (
    <Container>
      <ClockBody>
        {numbers.map((number, index) => (
          <ClockNumber
            key={`key-${number}-${index}`}
            rotation={(number + 1) * 30}
          >
            {number + 1}
          </ClockNumber>
        ))}
        <ClockPointerHours rotation={hoursRatio} />
        <ClockPointerMinutes rotation={minutesRatio} />
        <ClockPointerSeconds rotation={secondsRatio} />
        <ClockCenterDot />
      </ClockBody>
    </Container>
  );
};

export default Clock;
