import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #3C69B4;
    border-radius: 6px;
    opacity: 1;
    margin: 0 8px !important;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    background: #30C69D;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #2B2B36;
  }
  ::-webkit-scrollbar-thumb {
    background: #3D3D54;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #515168;
  }

  html {
    scrollbar-color: #3D3D54 #2B2B36;
    scrollbar-width: thin;
    scrollbar-gutter: stable;
    font-family: "Roboto", sans-serif;
  }

  body {
    touch-action: pan-y;
  }
`;
