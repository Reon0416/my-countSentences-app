import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 4px;
  margin: 12px 4px;
  padding: 12px 12px;
  vertical-align: middle;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #21e9e9;
  color: #21e9e9;
  transition: 0.5s;

  &:hover {
    color: #fff;
    background: #21e9e9;
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
