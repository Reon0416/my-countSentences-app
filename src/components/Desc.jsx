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
    margin: 24px;
    background-color: #beeef6;
  `;

  return (
    <>
    <Description>
      <h1 style={{margin: "12px"}}>字数カウンター</h1>
      <Container>
        <List number={1} head={"概要"} sent={"ESなどの文字数を数えたい文章の文字数をカウントするためのサービスです。"} />
        <List number={2} head={"準備"} sent={"記入したい文章のタイトルと制限文字数を記入し、「字数を数える」を押します。"} />
        <List number={3} head={"記入"} sent={"数えたい文章をフォームに記入します。文字数が超過したら数字が赤く表示されます。"} />
      </Container>
    </Description>
    </>
  );
};

export default Desc;
