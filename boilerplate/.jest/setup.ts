//arquivo de setup, informações do Jest

/*
pra habilitar os matchers do jest/dom, pra quando for escrever os testes.
com isso já tenho toda configuração necessária pra criar os componentes e escrever os testes
*/

import "@testing-library/jest-dom";
import "jest-styled-components"; /*

  para não precisar importar em todos arquivos q quero testar, quando for rodar os teste já chama isso aq.
  basicamente foi instalado, para que nos testes mostre o css do componente em si, não só a classe
*/