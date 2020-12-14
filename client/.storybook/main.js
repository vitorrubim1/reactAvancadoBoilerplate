module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-knobs"
  ]
};

/*
  stories: é aonde é definido aonde será lido os stories, e qual a extensão q poderá ser lido
  addons: são as actions personalizaveis dos gráficos, da pra por title, actions...
*/
