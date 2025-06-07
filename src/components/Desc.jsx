import List from "./List";
import styled from "styled-components";

const Desc = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  `;

  const Description = styled.div`
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
  `;

  return (
    <>
    <Description>
      <h2 style={{margin: "8px"}}>使い方</h2>
      <Container>
        <List number={1} head={"使い方"} sent={"こんな風に使います。こんな風に使います。こんな風に使います。こんな風に使います"} />
        <List number={2} head={"使い方"} sent={"こんな風に使います。こんな風に使います。こんな風に使います。こんな風に使います"} />
        <List number={3} head={"使い方"} sent={"こんな風に使います。こんな風に使います。こんな風に使います。こんな風に使います"} />
      </Container>
    </Description>
    </>
  );
};

export default Desc;
