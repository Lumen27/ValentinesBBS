import styled from "@emotion/styled";
import SpeechBubble from "../../../components/SpeechBubble/SpeechBubble";
import BananacatComputerSticker from "../../../assets/BananacatComputerSticker.png";
import BananacatSticker from "../../../assets/BananacatSticker.png";
import { useState } from "react";

const Part4_Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
`;

const WrongAnswers = styled(Row)`
  flex-direction: column;
`;

const Part4_Answer = () => {
  const [section, setSection] = useState<"left" | "center" | "right">("center");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const width = window.innerWidth;
    const mouseX = e.clientX;

    let newSection: "left" | "center" | "right";
    if (mouseX < width / 3) newSection = "left";
    else if (mouseX < (width / 3) * 2) newSection = "center";
    else newSection = "right";

    // Only update state if the section actually changed
    if (newSection !== section) {
      setSection(newSection);
    }
  };

  return (
    <Part4_Wrapper onMouseMove={handleMouseMove}>
      <SpeechBubble text="Will you be my valentine?" />

      <Row>
        <div>yes</div>

        {section === "left" && <img src={BananacatSticker} width="100" alt="bebas workin" />}
        {section === "center" && (
          <img src={BananacatComputerSticker} width="100" alt="bebas workin" />
        )}
        {section === "right" && <img src={BananacatSticker} width="100" alt="bebas workin" />}

        <WrongAnswers>
          <button>no</button>
          <button>hmm</button>
        </WrongAnswers>
      </Row>
    </Part4_Wrapper>
  );
};

export default Part4_Answer;
