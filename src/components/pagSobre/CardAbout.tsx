import { StyledContainerCard, StyleImageCard } from './CardAbout.styled';
import Image from 'next/image';

type CardProps = {
  tiltle: string;
  paragraph: string;
  src: string;
};

export default function CardAbout(props: CardProps) {
  return (
    <StyledContainerCard>
      <StyleImageCard>
        <Image src={props.src} alt="sobre" width={38} height={38} />
      </StyleImageCard>

      <h1>{props.tiltle}</h1>
      <p>{props.paragraph}</p>
    </StyledContainerCard>
  );
}
