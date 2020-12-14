import { StoryFn } from "@storybook/addons";

import GlobalStyles from "../src/styles/global";
/* 
  Isso é um decorator (que serve para englobar qualquer coisa).
  Nesse caso, é para englobar o estilo global em todos stories.
*/

const withGlobalStyles = (storyFn: StoryFn) => {
  <>
    <GlobalStyles />
    {storyFn()} {/*recebo um storie como parametro, e renderizo ele aq*/}
  </>;
};

export default withGlobalStyles;