import styled from "styled-components";

const Req = () => {
  const Requirment = styled.div`
    border: 1px solid black;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
  `;

  const TitleForm = styled.input`
    padding: 16px;
    margin: 16px;
    width: 80%;
    border: 2px solid gray;
    border-radius: 8px;
    font-size: 16px;
  `;
  return(
    <>
    <Requirment>
      <TitleForm placeholder="例：志望動機"/>
    </Requirment>
    </>
  )
}

export default Req;