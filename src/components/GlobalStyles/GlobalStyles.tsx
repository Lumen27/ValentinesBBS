import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      /* CSS Reset / normalize */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html,
      body {
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #ffffff;
        color: #111111;
        line-height: 1.5;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ul,
      ol {
        list-style: none;
      }

      button {
        font: inherit;
        cursor: pointer;
        border: none;
        background: none;
      }
    `}
  />
);
