/**
 * 글로벌 스타일
 */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-size-xs: .75rem;
    --font-size-s: .875rem;
    --font-size-m: 1rem; // button, placeholder
    --font-size-l: 1.125rem; // title
    --font-size-xl: 1.25rem;

    --color-main: #77cbd6;
    --color-red: #f66565;
    --color-black: #333333
    --color-green: #52eeb6;
    --color-gray-l: #dddddd;
    --color-gray-d: #757575;
  }

  * {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6,
  button, input {
    all: unset;
  }

  button {
    text-align: center;
    cursor: pointer;

    &:hover {
      filter: brightness(90%);
    }

    &:active {
      filter: brightness(80%);
    }

    &:disabled {
      background-color: var(--color-gray-l);
      color: white;
      pointer-events: none;
    }
  }

  input {
    cursor: text;
  }

  ul > li {
    list-style: none;
  }
`;
