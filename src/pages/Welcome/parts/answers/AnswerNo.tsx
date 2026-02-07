import Button from "../../../../components/Button/Button";
import SpeechBubble from "../../../../components/SpeechBubble/SpeechBubble";
import { Column, Row } from "../../../../components/utils";
import LetMeThink from "../../../../assets/LetMeThink.png";
import { FC } from "react";
import styled from "@emotion/styled";
import { TryAgainWrapper } from "./utils";

interface Props {
  onClick: () => void;
  noCounter: number;
}

const Wrapper = styled(Column)`
  gap: 32px;
`;
const ImgWrapper = styled(Column)`
  align-items: center;
  font-weight: bold;
  font-size: 24px;
`;

const RetryButtonWrapper = styled(Row)`
  position: relative;
`;

const AnswerNo: FC<Props> = ({ onClick, noCounter }) => {
  return (
    <Wrapper>
      <Row gap={16}>
        {noCounter === 1 && (
          <Column>
            <SpeechBubble text="I'm sure you didnt mean to click that haha" />
            <ImgWrapper>
              <img src={LetMeThink} alt="LetMeThink" />
            </ImgWrapper>
          </Column>
        )}

        {noCounter > 1 && (
          <Column>
            <SpeechBubble text="Вэтэфэк ббс, what do you mean by that 🤨" />
            <ImgWrapper>
              <img src={LetMeThink} alt="LetMeThink" />
            </ImgWrapper>
          </Column>
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
    </Wrapper>
  );
};

export default AnswerNo;
