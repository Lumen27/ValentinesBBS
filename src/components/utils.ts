import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const wobbleAnimation = keyframes`
  0% { transform: rotate(1deg); }
  50% { transform: rotate(-1deg); }
  100% { transform: rotate(1deg); }
`;

export const Row = styled.div<{
  isHidden?: boolean;
  align?: string;
  justify?: string;
  gap?: number;
}>`
  display: ${({ isHidden = false }) => (isHidden ? `none` : `flex`)};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => (gap ? gap + "px" : "")};
`;
export const Column = styled(Row)`
  flex-direction: column;
`;
