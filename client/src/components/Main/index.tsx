import * as Style from "./styles"; //pra ficar claro oq de fato é estilo

const Main = () => (
  <Style.Wrapper>
    <Style.Logo
      src="/images/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <Style.Title>React avançado</Style.Title>
    <Style.Description>
      Typescript, ReactJS, NextJS e Styled-components
    </Style.Description>
    <Style.Illustration
      src="images/hero-illustration.svg"
      alt="Imagem de um desenvolvedor de frente pra uma tela com código"
    />
  </Style.Wrapper>
);

export default Main;
