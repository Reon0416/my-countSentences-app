import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import Form from "./Form";

const Requirment = styled.div`
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
    margin: 24px;
  `;
  const TitleForm = styled.input`
    padding: 16px;
    margin: 16px;
    width: 80%;
    border: 2px solid gray;
    border-radius: 8px;
    font-size: 16px;
  `;
  const Header2 = styled.h2`
    color: #24c5f1;
  `;

const Req = () => {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState("");
  const [showForm, setShowForm] = useState(false);

  const complete = () => {
    setShowForm((prev) => !prev)
  }

  const del = () => {
    setTitle("");
    setCount("");
  }

  return(
    <>
    <Requirment>
      <div>
        <Header2>タイトル</Header2>
        <TitleForm placeholder="例：志望動機" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Header2>制限字数</Header2>  
        <TitleForm placeholder="例：300(半角)" type="text" value={count} onChange={(e) => setCount(e.target.value)}/>
      </div>
      <Button onClick={complete}>字数を数える</Button>
      <Button onClick={del}>削除</Button>
    </Requirment>
    {showForm && <Form title={title} count={count} complete={complete} del={del} />}
    </>
  )
}

export default Req;