import WelcomePage from "./pages/Welcome/Welcome";
import styled from "@emotion/styled";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";

const Main = styled.main`
  background: darkcyan;
`;

function App() {
  return (
    <Main>
      <GlobalStyles />
      <WelcomePage />
    </Main>
  );
}

export default App;
