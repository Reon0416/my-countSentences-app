import styled from "styled-components";

const HeadCounter = styled.h1`
  text-align: center;
`;

const Warning = styled.p`
  text-align: center;
  font-size: 24px;
  color: red;
`;

const ValueSpan = styled.span`
  color: ${({isOver}) => (isOver ? "red" : "balck")};
`;

const Counter = ({value, count}) => {
  const isOver = value > count;

  return(
    <>
      <HeadCounter><ValueSpan isOver={isOver}>{value}</ValueSpan>/{count}</HeadCounter>
      {isOver && <Warning>字数を超過しています。</Warning>}
    </>
  )
}

export default Counter;