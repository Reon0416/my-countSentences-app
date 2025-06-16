import styled from "styled-components";
import Counter from "./Counter";
import Button from "./Button";
import { useState } from "react";
import {Header2} from "./Req";

const NewForm = styled.div`
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
    margin: 0 60px 24px;
  `;
  const SentencesDiv = styled.div`
    display: flex;
    justify-content: center;
  `;
  const SentencesForm = styled.textarea`
    padding: 16px;
    margin: 16px;
    width: 90%;
    height: 300px;
    border: 2px solid gray;
    border-radius: 8px;
    font-size: 16px;
    resize: none;
  `;

  const FormHeader2 = styled.h2`
    padding: 4px;
    border-bottom: 1px solid#d6e3ed;
    margin: 16px;
  `;

const Form = ({title, count, complete, del}) => {
  const [text, setText] = useState();
  const [value, setValue] = useState(0);

  const textChange = (e) => {
    const newText = e.target.value
    setText(newText);
    setValue(newText.replace(/\s/g, '').length);
  }

  const reset =() => {
    setText("")
    setValue(0)
  }
  
  return(
    <NewForm>
      <FormHeader2>{title}</FormHeader2>
      <SentencesDiv>
        <SentencesForm 
          placeholder="例：字数をカウントしたい文章を入力してください"
          type="text"
          value={text}
          onChange={textChange}
        />
      </SentencesDiv>
      <Counter count={count} value={value}/>
      <Button onClick={reset}>リセット</Button>
      <Button onClick={() => {complete(); del();}}>終了</Button>
    </NewForm>
  )
}

export default Form;