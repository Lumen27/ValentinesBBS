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

const AnswerHmm: FC<Props> = ({ onClick }) => {
  return (
    <Wrapper>
      <Row>
        <SpeechBubble text={`This you?`} />
        <ImgWrapper>
          <p>Let me think</p>
          <img src={LetMeThink} alt="LetMeThink" />
        </ImgWrapper>
      </Row>

      <TryAgainWrapper justify="center">
        <SpeechBubble
          text={`Wrong answer😡`}
          extra={
            <Button style={{ marginTop: "8px" }} onClick={() => onClick()}>
              Think again
            </Button>
          }
        />
      </TryAgainWrapper>
    </Wrapper>
  );
};

export default AnswerHmm;
