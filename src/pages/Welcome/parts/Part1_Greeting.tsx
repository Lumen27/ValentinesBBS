import styled from "@emotion/styled";
import BananacatSticker from "../../../assets/BananacatSticker.png";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";

const Part1_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Part1_Greeting = () => {
  // wave
  return (
    <Part1_Wrapper>
      <SpeechBubble text="Hello bbs!" />
      <img src={BananacatSticker} width={130} alt="bebas workin" />
    </Part1_Wrapper>
  );
};

export default Part1_Greeting;
