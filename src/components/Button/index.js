import styled from "styled-components";

const Button = styled.button.withConfig({
  displayName: "button"
})`
  outline: none;
  border: 0;
  background-color: ${({ theme }) => theme.backgroundColors["quantum-blue"]};
  color: #fff;
`;

export default Button;
