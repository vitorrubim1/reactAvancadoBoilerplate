import { Meta, Story } from "@storybook/react/types-6-0"; //Meta: metadados

import Main from "./index";

export default {
  title: "Main",
  component: Main,
  args: {
    title: "Titulo default",
    description: "Descrição default"
  }
} as Meta;

export const Basic: Story = (args) => (
  <Main {...args} />
); /*
Aq eu passo através de uma prop, um desestruturação de todos argumentos
*/

Basic.args = {
  // forma de sobreescrever o args padrão
  title: "Title teste",
  description: "description teste"
};

export const Default: Story = (args) => <Main {...args} />;
