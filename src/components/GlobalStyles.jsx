import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body, html {
  color: #35447C;
  background-color: #0f0f0f;
  padding: 0;
  margin: 0;
}

div,
form,
fieldset,
section,
main,
table,
td,
tr,
th,
tbody,
thead,
button,
input,
label,
span,
header,
ul,
select,
option,
li,
img,
p,
h1,
h2,
h3,
h4,
a,
aside,
nav,
main,
textarea,
pre {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
a:visited {
  color: inherit;
}
li {
  list-style-type: none;
}
th {
  font-weight: normal;
}
table {
  border-collapse: collapse;
}
button:hover {
  cursor: pointer;
}
textarea {
  resize: none;
}
`;

export default GlobalStyles;
