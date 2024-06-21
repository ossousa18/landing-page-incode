import { StyledContainerJornada, StyledContainerCardMod } from './Jornada.styled';
import CardMod from '@/components/pagJornada/CardMod';

export default function Jornada() {
  return (
    <StyledContainerJornada>
      <h1>Conheça a jornada que você irá percorrer</h1>

      <StyledContainerCardMod>
        <CardMod tiltle="Módulo 1 - Formação" hors="92h" number="1" background="green" />
        <CardMod tiltle="Módulo 2 - Oxygenação" hors="320h" number="2" background="blue" />
        <CardMod tiltle="Módulo 3 - Imersão" hors="480h" number="3" background="purple" />
      </StyledContainerCardMod>
    </StyledContainerJornada>
  );
}
