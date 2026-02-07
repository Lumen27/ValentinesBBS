import Button from "../../../../components/Button/Button";
import SpeechBubble from "../../../../components/SpeechBubble/SpeechBubble";
import { Column, Row } from "../../../../components/utils";
import LetMeThink from "../../../../assets/LetMeThink.png";
import { FC } from "react";
import styled from "@emotion/styled";
import { TryAgainWrapper } from "./utils";

interface Props {
  onClick: () => void;
}

const Wrapper = styled(Column)`
  gap: 32px;
`;
const ImgWrapper = styled(Column)`
  align-items: center;
  font-weight: bold;
  font-size: 24px;
`;

const AnswerIGuess: FC<Props> = ({ onClick }) => {
  return (
    <Wrapper>
      <Row gap={16}>
        <Column>
          <SpeechBubble text={`You guess??`} />
          <ImgWrapper>
            <img src={LetMeThink} alt="LetMeThink" />
          </ImgWrapper>
        </Column>
        <Column>
          <SpeechBubble
            text={
              <>
                I <i>guess</i> I'll go fuck myself then
              </>
            }
          />
          <ImgWrapper>
            <img src={LetMeThink} alt="LetMeThink" />
          </ImgWrapper>
        </Column>
      </Row>

      <TryAgainWrapper justify="center">
        <SpeechBubble
          text={`Wrong answer😡`}
          extra={
            <Button style={{ marginTop: "8px" }} onClick={() => onClick()}>
              Guess again
            </Button>
          }
        />
      </TryAgainWrapper>
    </Wrapper>
  );
};

export default AnswerIGuess;
