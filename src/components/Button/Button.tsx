import styled from "@emotion/styled";

type ButtonProps = {
  variant?: "main" | "secondary";
};

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 12px 24px;
  font-family: inherit;
  font-weight: 700;
  border-radius: 50px; /* Pill shape is cuter */
  border: 4px solid white;
  transition: transform 0.1s ease-in-out;
  filter: drop-shadow(0 4px 0px rgba(0, 0, 0, 0.05));
  height: fit-content;

  background-color: ${({ variant = "main" }) => (variant === "main" ? "#B2E2D2" : "#E8EBF2")};
  color: ${({ variant = "main" }) => (variant === "main" ? "#2E4C47" : "#4A5568")};

  &:hover {
    transform: translateY(-2px); /* A tiny lift */
    filter: drop-shadow(0 6px 0px rgba(0, 0, 0, 0.05));
  }

  &:active {
    transform: translateY(0px); /* Pushes down when clicked */
  }
`;

export default Button;
