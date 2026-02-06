import styled from "@emotion/styled";
import Part1_Greeting from "./parts/Part1_Greeting";
import Part2_Coding from "./parts/Part2_Coding";
import Part3_Question from "./parts/Part3_Question";
import Part4_Answer from "./parts/Part4_Answer";
import { useEffect, useState } from "react";

const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Row = styled.div`
  display: flex;
`;

const AnswerWrapper = styled(Row)`
  justify-content: center;
`;

const WelcomePage = () => {
  const [currentPart, setCurrentPart] = useState(0);

  const NextPart = () => setCurrentPart(currentPart + 1);

  useEffect(() => {
    if (currentPart < 3) {
      setTimeout(() => {
        NextPart();
      }, 2000);
    }
  }, [currentPart]);

  return (
    <WelcomeWrapper>
      <Row>
        {currentPart >= 0 && <Part1_Greeting />}
        {currentPart > 0 && <Part2_Coding />}
        {currentPart > 1 && <Part3_Question />}
      </Row>
      <AnswerWrapper>{currentPart > 2 && <Part4_Answer />}</AnswerWrapper>
    </WelcomeWrapper>
  );
};

export default WelcomePage;
