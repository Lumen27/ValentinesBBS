import { keyframes } from "@emotion/react";

export const wobbleAnimation = keyframes`
  0% { transform: rotate(1deg); }
  50% { transform: rotate(-1deg); }
  100% { transform: rotate(1deg); }
`;
