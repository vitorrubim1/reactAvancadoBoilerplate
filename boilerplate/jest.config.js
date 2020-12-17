module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/stories.tsx"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src/"]
};
/*
testEnvironment: simular o dom do browser, para conseguirmos testar
collectCovarage: quando rodar o comando do jest, fazer o teste de cobertura e ver se estou cobrindo todas as funções, variaveis etc..
collectCovarageFrom: pra fazer a cobertura de todos os arqs da source, com extensão .js||.jsx
setupFilesAfterEnv: passar algumas infos pro jest pra ele caregar antes de todos os testes, essas informações
*/
