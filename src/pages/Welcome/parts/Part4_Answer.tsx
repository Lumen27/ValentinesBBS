import styled from "@emotion/styled";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import ReactionThinking from "../../../assets/ReactionThinking.png";
import ReactionYes from "../../../assets/ReactionYes.png";
import ReactionWrong from "../../../assets/ReactionWrong.png";
import ReactionNo from "../../../assets/ReactionNo.png";
import { FC, useState } from "react";
import Button from "../../../components/Button/Button";
import { Column, Row } from "../../../components/utils";
import AnswerHmm from "./answers/AnswerHmm";
import AnswerIGuess from "./answers/AnswerIGuess";
import AnswerNo from "./answers/AnswerNo";

enum AnswerTypes {
  THINKING = "THINKING",
  YES = "YES",
  HMM = "HMM",
  I_GUESS = "I_GUESS",
  NO = "NO",
}

const Part4_Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

const WrongAnswers = styled(Column)`
  position: relative;
`;

const NoButtonWrapper = styled(Column)`
  position: relative;
`;

const Counter = styled.div`
  position: absolute;
  bottom: 0;
  right: 16px;
`;

const ImgContainer = styled(Row)`
  width: 500px;
  height: 500px;
  align-items: flex-end;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    position: relative;

    &.previewYes {
      bottom: -100px;
    }
    &.previewThinking {
      bottom: -65px;
    }
  }
`;

const Part4_Answer: FC<{ NextPart: () => void }> = ({ NextPart }) => {
  const { THINKING, YES, HMM, I_GUESS, NO } = AnswerTypes;
  const [currentAnswerHover, setCurrentAnswerHover] = useState<AnswerTypes>(THINKING);
  const [currentAnswer, setCurrentAnswer] = useState<AnswerTypes>(THINKING);

  const handleHover = (ans: AnswerTypes) => {
    if (ans !== currentAnswerHover) setCurrentAnswerHover(ans);
  };
  const handleClick = (ans: AnswerTypes = THINKING) => {
    setCurrentAnswer(ans);
  };

  const resetCurrentAnswer = () => {
    setCurrentAnswerHover(THINKING);
  };

  const [noCounter, setNoCounter] = useState(0);

  return (
    <Part4_Wrapper>
      <SpeechBubble text="Will you be my Valentine?" />

      <Row isHidden={currentAnswer !== THINKING}>
        <Button
          onMouseOver={() => handleHover(YES)}
          onClick={() => NextPart()}
          onMouseLeave={resetCurrentAnswer}
        >
          Yes
        </Button>

        <ImgContainer>
          {currentAnswerHover === YES && (
            <img src={ReactionYes} alt="bebas workin" className="previewYes" />
          )}
          {currentAnswerHover === THINKING && (
            <img src={ReactionThinking} alt="bebas workin" className="previewThinking" />
          )}
          {currentAnswerHover === HMM && <img src={ReactionWrong} alt="bebas workin" />}
          {currentAnswerHover === I_GUESS && <img src={ReactionWrong} alt="bebas workin" />}
          {currentAnswerHover === NO && <img src={ReactionNo} alt="bebas workin" />}
        </ImgContainer>

        <WrongAnswers justify="flex-end">
          <Button
            variant="secondary"
            onMouseOver={() => handleHover(HMM)}
            onClick={() => handleClick(HMM)}
            onMouseLeave={resetCurrentAnswer}
          >
            Hmm...
          </Button>
          <Button
            variant="secondary"
            onMouseOver={() => handleHover(I_GUESS)}
            onClick={() => handleClick(I_GUESS)}
            onMouseLeave={resetCurrentAnswer}
          >
            I guess...
          </Button>
          <NoButtonWrapper>
            <Button
              variant="secondary"
              onMouseOver={() => handleHover(NO)}
              onClick={() => {
                handleClick(NO);
                if (noCounter < 2) setNoCounter(noCounter + 1);
              }}
              onMouseLeave={resetCurrentAnswer}
            >
              No
            </Button>
            <Counter>{noCounter}/2</Counter>
          </NoButtonWrapper>
        </WrongAnswers>
      </Row>

      <Row isHidden={currentAnswer === THINKING}>
        {currentAnswer === HMM && <AnswerHmm onClick={handleClick} />}
        {currentAnswer === I_GUESS && <AnswerIGuess onClick={handleClick} />}
        {currentAnswer === NO && <AnswerNo onClick={handleClick} noCounter={noCounter} />}
      </Row>
    </Part4_Wrapper>
  );
};

export default Part4_Answer;
