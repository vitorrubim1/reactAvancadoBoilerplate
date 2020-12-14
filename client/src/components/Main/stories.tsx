import { withKnobs, text } from "@storybook/addon-knobs";

import Main from "./index";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs] //um decorator, que recebe outro decorator
};

export const Basic = () => (
  <Main
    title={text("Title", "React Avançado")}
    description={text(
      "Description",
      "React, Typescript, NextJS, Styled Components"
    )}
  />
); /*
  Aq eu passo através de uma prop, um text, mas pode ser number, boolean.. (primeiro argumento uma descrição do que é, e o segundo um valor default).
*/
