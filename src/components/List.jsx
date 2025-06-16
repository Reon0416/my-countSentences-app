import styled from "styled-components";
import {Header2} from "./Req";

const List = ({head, sent}) => {
  const Step = styled.div`
  `;

  return (
    <>
      <Step>
        <Header2>{head}</Header2>
        <p>{sent}</p>
      </Step>
    </>
  );
};

export default List;
