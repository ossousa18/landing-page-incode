import { StyledLine, StyledContainerLine, StyledCircul, StyledInfosMod } from './Diveder.styled';

type DivederProps = {
  number: string;
  tiltle: string;
  paragraph: string;
  modules: string;
  background?: 'green' | 'blue' | 'purple';
  colorText?: 'green' | 'blue' | 'purple';
  colorBorder?: 'green' | 'blue' | 'purple';
};

export default function Diveder(props: DivederProps) {
  return (
    <StyledContainerLine>
      <StyledLine background={props.background} />
      <StyledCircul border={props.colorBorder}>
        <h1>{props.number}</h1>
      </StyledCircul>

      <StyledInfosMod color={props.colorText}>
        <h1>{props.modules}</h1>
        <h2>{props.tiltle}</h2>
        <p>{props.paragraph}</p>
      </StyledInfosMod>
    </StyledContainerLine>
  );
}
