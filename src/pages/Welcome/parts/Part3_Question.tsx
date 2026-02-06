import styled from "@emotion/styled";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import BananacatSticker from "../../../assets/BananacatSticker.png";

const Part3_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Part3_Question = () => {
  return (
    <Part3_Wrapper>
      <SpeechBubble text="But in order to see it, you gotta answer 1 question:" />
      <div>
        <img src={BananacatSticker} width="200" alt="bebas workin" />
      </div>
    </Part3_Wrapper>
  );
};

export default Part3_Question;
