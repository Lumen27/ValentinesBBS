import Button from "../../../../components/Button/Button";
import SpeechBubble from "../../../../components/SpeechBubble/SpeechBubble";
import { Column, Row } from "../../../../components/utils";
import ReactionWhat from "../../../../assets/ReactionWhat.png";
import { FC } from "react";
import styled from "@emotion/styled";
import { TryAgainWrapper } from "./utils";

interface Props {
  onClick: () => void;
}

const ImgContainer = styled(Column)`
  height: 360px;
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

const AnswerIGuess: FC<Props> = ({ onClick }) => {
  return (
    <Column gap={32}>
      <Row gap={16}>
        <ImgContainer>
          <SpeechBubble
            text={
              <>
                You guess??
                <br /> I <i>guess</i> I'll go fuck myself then
                <br /> 6 7
              </>
            }
          />
          <img src={ReactionWhat} alt="ReactionWhat" />
        </ImgContainer>
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
    </Column>
  );
};

export default AnswerIGuess;
