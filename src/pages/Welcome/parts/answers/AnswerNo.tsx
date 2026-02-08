import Button from "../../../../components/Button/Button";
import SpeechBubble from "../../../../components/SpeechBubble/SpeechBubble";
import { Column, Row } from "../../../../components/utils";
import ReactionJoke from "../../../../assets/ReactionJoke.png";
import ReactionWTF from "../../../../assets/ReactionWTF.png";
import { FC } from "react";
import styled from "@emotion/styled";
import { TryAgainWrapper } from "./utils";

interface Props {
  onClick: () => void;
  noCounter: number;
}

const ImgContainer = styled(Column)`
  height: 260px;
  width: auto;
  align-items: center;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
    display: block;
    position: relative;
  }
`;

const RetryButtonWrapper = styled(Row)`
  position: relative;
`;

const AnswerNo: FC<Props> = ({ onClick, noCounter }) => {
  return (
    <Column gap={32}>
      <Row gap={16}>
        {noCounter === 1 && (
          <ImgContainer gap={16}>
            <SpeechBubble text="I'm sure you didnt mean to click that haha" />
            <img src={ReactionJoke} alt="ReactionJoke " />
          </ImgContainer>
        )}

        {noCounter > 1 && (
          <ImgContainer gap={16}>
            <SpeechBubble text="Вэтэфэк ббс, what do you mean by that 🤨" />
            <img src={ReactionWTF} alt="ReactionWTF" />
          </ImgContainer>
        )}
      </Row>

      <TryAgainWrapper justify="center">
        <SpeechBubble
          text={`Oopsie🤭`}
          extra={
            <RetryButtonWrapper>
              <Button style={{ marginTop: "8px" }} onClick={() => onClick()}>
                Pick again
              </Button>
            </RetryButtonWrapper>
          }
        />
      </TryAgainWrapper>
    </Column>
  );
};

export default AnswerNo;
