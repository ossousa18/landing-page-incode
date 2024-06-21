import { StyledTextMod, StyledContainerMod1, StyledContainerModulo } from './ModuloFormação.styled';
import Diveder from './Diveder';
import CardModules from './CardModules';

export default function ModuloFormaçao() {
  return (
    <StyledContainerMod1>
      <StyledTextMod>Sobre os módulos</StyledTextMod>
      <Diveder
        colorBorder="green"
        colorText="green"
        background="green"
        number="1"
        tiltle="Formação"
        modules="Módulo 1"
        paragraph="O modulo de formação é o módulo inicial do Incode onde você aprenderá conceitos iniciais de programação web, algoritmos e lógica de programação, através de aulas lecionadas por nossos intrutores"
      />

      <StyledContainerModulo>
        <CardModules />
      </StyledContainerModulo>
    </StyledContainerMod1>
  );
}
