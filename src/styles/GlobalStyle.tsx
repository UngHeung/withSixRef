/**
 * 글로벌 스타일
 */

import { createGlobalStyle } from "styled-components";
import "./font.css";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Noto Sans KR', sans-serif;
    --font-kr: 'Noto Sans KR', sans-serif;
    --font-eng: 'Barlow', sans-serif;

    --font-size-xs: .75rem;
    --font-size-s: .875rem;
    --font-size-m: 1rem; // button, placeholder
    --font-size-l: 1.125rem; // title
    --font-size-xl: 1.25rem;

    --color-main: #77cbd6;
    --color-focus: #c4ecf1;
    --color-back: #f0f0f0;
    --color-black: #333333;
    --color-gray-l: #dddddd;
    --color-gray-d: #757575;
    --color-disabled: #cccccc;
    --color-red: #F66565;
    --color-green: #52eeb6;
    --color-cover: rgba(51, 51, 51, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    all: unset;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6,
  button, input {
    all: unset;
  }

  input:focus,
  input:hover,
  textarea:focus,
  textarea:hover,
  button:focus,
  button:hover {
      outline: 3px solid var(--color-focus);
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
    font-family: var(--font-eng);
    text-align: center;
    cursor: text;

    &::placeholder {
      font-family: var(--font-kr);
      text-align: left;
    }
  }

  ul > li {
    list-style: none;
  }

  button .user-active {

  }

  input .user_input {

  }

  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-cover);
    border-radius: 3px;
}
`;
