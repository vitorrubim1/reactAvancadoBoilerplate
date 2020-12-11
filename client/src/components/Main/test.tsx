import { screen, render } from "@testing-library/react";
/*screen: busca por um elemento no componte e o render: renderiza o componente, em caso de dúvida só olhar a doc*/

import Main from "./index";

/*
  describe: descrever o que vamos teste.
  aspas: "descrição/identificador" do que vamos testar, tanto faz o nome
*/
describe("<Main />", () => {
  //it: é um bloco aonde de fato será feito o teste de alguma coisa
  it("buscando algum heading h1, h2...", () => {
    const { container } = render(<Main />); //renderizo o componente que quero testar

    /*
      expect: espero buscar algo, por isso utilizo o screen. 
      Eu descrevo o que quero nas aspas.
      E passei no "name:" o que de fato quero encontrar. 
      E que ele realmente exista no documento, por isso uso: "toBeInTheDocument()".
      O "//i" envolta do "testando o componente" quer dizer que tanto faz se é caixa baixa ou alta
      getByRole: a tag que quero buscar, nesse caso "heading" é um h1, mas tem como buscar por id, class...
      */
    expect(
      screen.getByRole("heading", { name: /React avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
    /*
      Snapshot: uma camada a mais de segurança pros testes. 
      Eu digo que quero observar o primeiro item renderizado, H1.
      Quando eu rodar o teste, vai criar uma pasta _snapshot_ com o meu código em si.
      Se por acaso eu alterar o heading H1, para H2 o snapshot irá me avisar...
      se caso eu realmente queira fazer esta alteração é só apertar a letra u.
    */
  });

  it("should render the colors correctly", () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ "background-color": "#06092b" });
  });
});
