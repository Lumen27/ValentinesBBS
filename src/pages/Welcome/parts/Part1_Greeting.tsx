import ReactionHello from "../../../assets/ReactionHello.png";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import { Column } from "../../../components/utils";

const Part1_Greeting = () => {
  return (
    <Column gap={16}>
      <SpeechBubble text="Hello bbs!" />
      <img src={ReactionHello} width={130} alt="bebas workin" />
    </Column>
  );
};

export default Part1_Greeting;
