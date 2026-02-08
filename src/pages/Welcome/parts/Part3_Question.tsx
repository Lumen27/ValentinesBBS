import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import Reaction1Question from "../../../assets/Reaction1Question.png";
import { Column } from "../../../components/utils";

const Part3_Question = () => {
  return (
    <Column gap={16} align="center">
      <SpeechBubble text="But in order to see it, you gotta answer 1 question:" />
      <img src={Reaction1Question} width="200" alt="bebas workin" />
    </Column>
  );
};

export default Part3_Question;
