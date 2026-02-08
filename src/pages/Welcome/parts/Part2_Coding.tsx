import styled from "@emotion/styled";
import BananacatComputerSticker from "../../../assets/BananacatComputerSticker.png";
import ReactionCook from "../../../assets/ReactionCook.png";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import { Column, Row, wobbleAnimation } from "../../../components/utils";
import Button from "../../../components/Button/Button";
import { useState } from "react";

const Part2_Wrapper = styled(Row)``;
const StickerImg = styled.img<{ fast?: boolean }>`
  animation: ${wobbleAnimation} ${({ fast }) => (fast ? "0.15s" : "0.75s")} ease-in-out infinite;
`;

const Part2_Coding = () => {
  const [isAnimationSpedUp, setIsAnimationSpedUp] = useState(false);

  const handleSpeedUpAnimation = () => {
    if (isAnimationSpedUp) return;

    setIsAnimationSpedUp(true);

    setTimeout(() => {
      setIsAnimationSpedUp(false);
    }, 1000);
  };

  return (
    <Part2_Wrapper gap={16}>
      <Column gap={16} align={"center"}>
        <SpeechBubble text="A ya cooking something👀" />
        <img src={ReactionCook} width="100" alt="bebas workin" />
      </Column>

      <Column gap={16} align={"center"}>
        <SpeechBubble text="Дыс ми кукин)" />
        <StickerImg
          src={BananacatComputerSticker}
          width="100"
          alt="bebas workin"
          fast={isAnimationSpedUp}
        />
        <Button
          onClick={() => {
            handleSpeedUpAnimation();
          }}
        >
          Click to cook faster
        </Button>
      </Column>
    </Part2_Wrapper>
  );
};

export default Part2_Coding;
