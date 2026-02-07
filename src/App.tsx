import WelcomePage from "./pages/Welcome/Welcome";
import styled from "@emotion/styled";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";

const MAIN_BG = "#ff7e70";

const Main = styled.main`
  background: ${MAIN_BG};
  display: flex;
  flex-direction: column;
  padding: 24px;

  min-height: 100vh;
`;

import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ja");
dayjs.extend(utc);
dayjs.extend(timezone);

function App() {
  return (
    <Main>
      <GlobalStyles />
      <WelcomePage />
    </Main>
  );
}

export default App;
