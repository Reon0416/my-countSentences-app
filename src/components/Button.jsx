import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 4px;
  margin: 12px 4px;
  padding: 12px 12px;
  vertical-align: middle;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid gray;
  color: gray;
  transition: 0.5s;
  background-color: #fff;

  &:hover {
    color: gray;
    background: #d6e3ed;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
};

export default Button;
