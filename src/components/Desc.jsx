import List from "./List";
import styled from "styled-components";

const Desc = () => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  `;

  const Description = styled.div`
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    padding: 24px;
    margin: 0 60px 24px;

    @media(max-width: 480px){
      margin: 0 0 24px;
    }
  `;

  return (
    <>
    <Description>
      <h1 style={{margin: "12px"}}>字数カウンター</h1>
      <Container>
        <List head={"1.概要"} sent={"ESなどの文字数を数えたい文章の文字数をカウントするためのサービスです。"} />
        <List head={"2.準備"} sent={"記入したい文章のタイトルと制限文字数を記入し、「字数を数える」を押します。"} />
        <List head={"3.記入"} sent={"数えたい文章をフォームに記入します。文字数が超過したら数字が赤く表示されます。"} />
      </Container>
    </Description>
    </>
  );
};

export default Desc;
