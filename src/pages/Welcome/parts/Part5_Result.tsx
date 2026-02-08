import CountdownTimer from "./Part5/CountdownTimer";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import { Column, Row } from "../../../components/utils";
import styled from "@emotion/styled";

import HappyCat from "../../../assets/HappyCat.gif";
import BananacatHeart from "../../../assets/BananacatHeart.png";

import { keyframes } from "@emotion/react";

// 1. Define the rising movement
const riseAndFade = keyframes`
  0% {
    transform: translateY(300px); /* Start below the container */
    opacity: 0;
  }
  15% {
    opacity: 1; /* Fade in quickly */
  }
  85% {
    opacity: 1; /* Stay solid through the middle */
  }
  100% {
    transform: translateY(-300px); /* End above the container */
    opacity: 0; /* Fade out at the top */
  }
`;

// 2. The Container (the "window" where they appear)
const EmojiContainer = styled.div`
  position: relative;
  width: 100px;
  height: 300px;
  border-radius: 50px;
  overflow: hidden; /* Important: keeps them contained */
  display: flex;
  justify-content: center;
`;

// 3. The Individual Thumbs
const FloatingThumb = styled.span<{ delay: string }>`
  position: absolute;
  font-size: 2rem;
  bottom: 0;

  /* Apply the animation */
  animation: ${riseAndFade} 8s linear infinite;

  /* Use the prop to offset the start time */
  animation-delay: ${(props) => props.delay};

  /* Initially hide them so they don't all pop in at once on load */
  opacity: 0;
`;

const Wrapper = styled(Column)`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  justify-content: space-between;

  p {
    div {
      justify-content: center;
    }
  }
`;
const Part5_Result = () => {
  return (
    <Wrapper align="center">
      <SpeechBubble text="Yippee!🎉🎉🎉" />
      <Row align={"anchor-center"}>
        <img src={HappyCat} alt={"HappyCat"} />
        <img src={BananacatHeart} height={250} alt={"BananacatHeart"} />
        <Row>
          <EmojiContainer>
            <FloatingThumb delay="0s">👍</FloatingThumb>
            <FloatingThumb delay="1.2s">👍</FloatingThumb>
            <FloatingThumb delay="1.4s">👍</FloatingThumb>
            <FloatingThumb delay="2s">👍</FloatingThumb>
            <FloatingThumb delay="2.2">👍</FloatingThumb>
            <FloatingThumb delay="2.6s">👍</FloatingThumb>
            <FloatingThumb delay="3s">👍</FloatingThumb>
          </EmojiContainer>
        </Row>
      </Row>
      <SpeechBubble
        text={
          <>
            Time left until Valentine's day
            <CountdownTimer />
          </>
        }
      />
    </Wrapper>
  );
};

export default Part5_Result;
