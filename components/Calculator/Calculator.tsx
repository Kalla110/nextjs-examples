import React, { FunctionComponent, useMemo, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 330px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Button = styled.button`
  width: 110px;
  height: 55px;
  color: white;
  background: transparent;
  cursor: pointer;
  border: 1px solid darkgray;
  font-size: 1.5em;
  transition: 0.3s;
  :hover {
    opacity: 0.5;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  align-items: flex-end;
  width: 330px;
  border: 1px solid darkgray;
  border-bottom: none;
  border-radius: 20px 20px 0px 0px;
`;

const CalculationPreview = styled.h3`
  width: 80%;
  align-self: flex-start;
  word-break: break-all;
  color: lightgray;
  font-size: 1em;
  letter-spacing: 2px;
  margin: 2px;
`;

const ResultText = styled.h2`
  color: lightgray;
  letter-spacing: 2px;
  margin: 2px;
`;

const inputArrayNumbers: string[] = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
];

const maxSizeResult: number = 15;

const Calculator: FunctionComponent = () => {
  const [result, setResult] = useState("0");
  const [preview, setPreview] = useState("");

  const isMaxSizeReached = useMemo(() => result?.length >= maxSizeResult, [
    result,
  ]);

  return (
    <Container>
      <Wrapper>
        <ResultContainer>
          <CalculationPreview>{preview}</CalculationPreview>
          <ResultText>{result}</ResultText>
        </ResultContainer>
        <ButtonContainer>
          {inputArrayNumbers.map((number) => (
            <Button
              onClick={() => {
                if (isMaxSizeReached) return;
                if (result === "0") setResult(number);
                else setResult(result + number);
              }}
            >
              {number}
            </Button>
          ))}
          <Button
            onClick={() => {
              if (isMaxSizeReached) return;
              if (!result?.includes(".")) setResult(result + ".");
            }}
          >
            .
          </Button>
          <Button
            onClick={() => {
              if (result?.includes("-")) setResult(result.substring(1));
              else if (result !== "0") setResult("-" + result);
            }}
          >
            +/-
          </Button>
          <Button onClick={() => setResult("0")}>C</Button>
          <Button
            onClick={() => {
              if (result?.length > 1) setResult(result?.slice(0, -1));
              else setResult("0");
            }}
          >
            CE
          </Button>
          <Button onClick={() => setResult("0")}>⏎</Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Calculator;
