import GlobalStyles from "../src/styles/global";

/* 
  Isso é um decorator (que serve para englobar qualquer coisa).
  Nesse caso, é para englobar o estilo global em todas stories.
*/

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];
