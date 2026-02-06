import styled from "@emotion/styled";
import BananacatComputerSticker from "../../../assets/BananacatComputerSticker.png";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import { wobbleAnimation } from "../../../components/utils";

const Part2_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StickerImg = styled.img`
  animation: ${wobbleAnimation} 0.15s ease-in-out infinite;
`;

const Part2_Coding = () => {
  // wave
  return (
    <Part2_Wrapper>
      <SpeechBubble text="A ya cooking something))" />
      <div>
        <StickerImg src={BananacatComputerSticker} width="100" alt="bebas workin" />
      </div>
    </Part2_Wrapper>
  );
};

export default Part2_Coding;
