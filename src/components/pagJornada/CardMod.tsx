import { StyledCardMod, StyledTextMod, StyledCuboMod } from './CardMod.styled';

type CardModProps = {
  number: string;
  tiltle: string;
  hors: string;
  background?: 'green' | 'blue' | 'purple';
};

export default function CardMod(props: CardModProps) {
  return (
    <StyledCardMod>
      <StyledCuboMod background={props.background}>
        <h2>{props.number}</h2>
      </StyledCuboMod>

      <StyledTextMod>
        <h3>{props.tiltle}</h3>
        <p>{props.hors}</p>
      </StyledTextMod>
    </StyledCardMod>
  );
}
