import CountdownTimer from "./Part5/CountdownTimer";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import { Column } from "../../../components/utils";

const Part5_Result = () => {
  return (
    <Column>
      <SpeechBubble text="Yippee!" />
      <CountdownTimer />
    </Column>
  );
};

export default Part5_Result;
