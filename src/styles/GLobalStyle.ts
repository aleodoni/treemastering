import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  /* min-height: 100vh;
  min-height: -webkit-fill-available; */
  background: var(--color-black);
  overflow-x:hidden;
}

body {
  overflow-x:hidden;
}

*, button, input {
  border: 0;
  background: none;
  color: var(--color-gray);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

a {
  text-decoration: none;
  color: var(--color-yellow);
  transition: opacity 0.4s;
}

a:hover {
  opacity: 0.6;
}

h1 {
  font-size: 2rem;
}


:root {
  --color-primary: #181818;
  --color-black: #000;
  --color-white: #fff;
  --color-gray: #666;
  --color-yellow: #fff461;
  --color-shwdow: #0d0d0d;
  --max-width: 960px;
}
`;
