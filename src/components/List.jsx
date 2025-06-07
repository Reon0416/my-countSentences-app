import styled from "styled-components";

const List = ({ number, head, sent}) => {
  const Step = styled.div`
    display: flex;
  `;

  const StepNumber = styled.div`
    padding: 0 12px;
  `;

  const StepSentences = styled.div`

  `;

  return (
    <>
      <Step>
        <StepNumber>{number}</StepNumber>
        <StepSentences>
          <h3 style={{margin: 0}}>{head}</h3>
          <p>{sent}</p>
        </StepSentences>
      </Step>
    </>
  );
};

export default List;
