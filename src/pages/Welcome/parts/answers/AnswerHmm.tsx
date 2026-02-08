import Button from "../../../../components/Button/Button";
import SpeechBubble from "../../../../components/SpeechBubble/SpeechBubble";
import { Column, Row } from "../../../../components/utils";
import LetMeThink from "../../../../assets/LetMeThink.png";
import ReactionRight from "../../../../assets/ReactionRight.png";
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
  overflow: hidden;

  img.cat {
    position: relative;
    top: -35px;
  }
`;

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

const AnswerHmm: FC<Props> = ({ onClick }) => {
  return (
    <Wrapper>
      <Row>
        <ImgContainer gap={16}>
          <SpeechBubble text={`This you?`} />
          <img src={ReactionRight} alt="ReactionRight" />
        </ImgContainer>
        <ImgWrapper>
          <p>Let me think</p>
          <img src={LetMeThink} alt="LetMeThink" className="cat" />
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
