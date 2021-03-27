import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { calculate } from "./logic";

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
  width: 400px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Button = styled.button<{ isOperator?: boolean }>`
  width: 100px;
  height: 55px;
  color: white;
  background: transparent;
  cursor: pointer;
  border: ${({ isOperator }) =>
    !!isOperator ? "2px solid white" : "1px solid darkgray"};
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
  width: 400px;
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

const inputArrayNumbers7To9: string[] = ["7", "8", "9"];
const inputArrayNumbers4To6: string[] = ["4", "5", "6"];
const inputArrayNumbers1To3: string[] = ["1", "2", "3"];

const maxSizeResult: number = 20;

const Calculator: FunctionComponent = () => {
  const [result, setResult] = useState("0");
  const [preview, setPreview] = useState("");
  const [operator, setOperator] = useState("");
  const [firstValue, setFirstValue] = useState("");

  const isMaxSizeReached = useMemo(() => result?.length >= maxSizeResult, [
    result,
  ]);

  const onClickOperator = useCallback(
    (_operator: string) => {
      //  theres already something, calculate and go on
      if (!!firstValue) {
        const calculationResult = calculate(
          Number(firstValue),
          operator,
          Number(result)
        );
        setFirstValue(calculationResult.toString());
        setOperator(_operator);
        setPreview(preview + " " + result + " " + _operator);
        setResult("0");
      } else {
        setFirstValue(result);
        setOperator(_operator);
        setPreview(result + " " + _operator);
        setResult("0");
      }
    },
    [result]
  );

  const onClickEnter = useCallback(() => {
    if (!firstValue || !operator) return;
    const calculationResult = calculate(
      Number(firstValue),
      operator,
      Number(result)
    );

    setPreview(`${firstValue} ${operator} ${result}`);
    setResult(calculationResult.toString());
    setFirstValue("");
    setOperator("");
  }, [firstValue, operator, result]);

  return (
    <Container>
      <Wrapper>
        <ResultContainer>
          <CalculationPreview>{preview}</CalculationPreview>
          <ResultText>{result}</ResultText>
        </ResultContainer>
        <ButtonContainer>
          {inputArrayNumbers7To9.map((number) => (
            <Button
              key={number}
              onClick={() => {
                if (isMaxSizeReached) return;
                if (result === "0") setResult(number);
                else setResult(result + number);
              }}
            >
              {number}
            </Button>
          ))}
          <Button isOperator onClick={() => onClickOperator("+")}>
            +
          </Button>
          {inputArrayNumbers4To6.map((number) => (
            <Button
              key={number}
              onClick={() => {
                if (isMaxSizeReached) return;
                if (result === "0") setResult(number);
                else setResult(result + number);
              }}
            >
              {number}
            </Button>
          ))}
          <Button isOperator onClick={() => onClickOperator("-")}>
            -
          </Button>
          {inputArrayNumbers1To3.map((number) => (
            <Button
              key={number}
              onClick={() => {
                if (isMaxSizeReached) return;
                if (result === "0") setResult(number);
                else setResult(result + number);
              }}
            >
              {number}
            </Button>
          ))}
          <Button isOperator onClick={() => onClickOperator("*")}>
            *
          </Button>
          <Button
            onClick={() => {
              if (result?.includes("-")) setResult(result.substring(1));
              else if (result !== "0") setResult("-" + result);
            }}
          >
            +/-
          </Button>
          <Button
            onClick={() => {
              if (isMaxSizeReached) return;
              if (result === "0") setResult("0");
              else setResult(result + "0");
            }}
          >
            0
          </Button>
          <Button
            onClick={() => {
              if (isMaxSizeReached) return;
              if (!result?.includes(".")) setResult(result + ".");
            }}
          >
            .
          </Button>
          <Button isOperator onClick={() => onClickOperator("/")}>
            /
          </Button>
          <Button
            onClick={() => {
              setResult("0");
              setFirstValue("");
              setOperator("");
              setPreview("");
            }}
          >
            C
          </Button>
          <Button isOperator style={{ width: "300px" }} onClick={onClickEnter}>
            ⏎
          </Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Calculator;
