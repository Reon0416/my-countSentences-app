import styled from "styled-components";
import Des from "./components/Desc";
import Req from './components/Req';

const AllDiv = styled.div`
  height: 100%;
  background-color: #d6e3ed;
`;

function App() {

  return (
    <>
    <AllDiv>
      <Des />
      <Req />
    </AllDiv>
    </>
  )
}

export default App
