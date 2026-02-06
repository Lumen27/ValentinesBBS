import styled from "@emotion/styled";
import { FC } from "react";
import { wobbleAnimation } from "../utils";

interface Props {
  text: string;
  tailPosition?: "left" | "right";
}

const SpeechBubbleWrapper = styled.div<{ tailPosition?: "left" | "right" }>`
  position: relative;
  display: inline-block;
  width: fit-content;
  background-color: #fffdf5;
  color: #4a4a4a;
  padding: 12px 24px;
  border-radius: 20px;
  border: 3px solid white; // Matching your sticker outline!
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); // Very soft shadow

  font-family: sans-serif;
  font-weight: 600;

  animation: ${wobbleAnimation} 3s ease-in-out infinite;

  // &::after {
  //   content: "";
  //   position: absolute;
  //   bottom: -18px; /* Pull it down past the border */
  //   width: 0;
  //   height: 0;
  //   border-left: 10px solid transparent;
  //   border-right: 10px solid transparent;
  //   border-top: 15px solid white; /* Matches the sticker outline */
  //
  //   left: ${(props) => (props.tailPosition === "right" ? "auto" : "20px")};
  //   right: ${(props) => (props.tailPosition === "right" ? "20px" : "auto")};
  // }
`;

const SpeechBubble: FC<Props> = ({ text, tailPosition = "left" }) => {
  return (
    <SpeechBubbleWrapper tailPosition={tailPosition}>
      <p>{text}</p>
    </SpeechBubbleWrapper>
  );
};

export default SpeechBubble;
