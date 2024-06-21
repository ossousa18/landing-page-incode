import {
  StyledContainer,
  StyledHeader,
  StyledLink,
  StyledButton,
  StyledDiv
} from './Header.styled';
import Image from 'next/image';

export default function Header() {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledDiv>
          <Image src="./imgs/Logo.svg" alt="logo Incode" width={40} height={40} />

          <StyledLink href="/">
            Início <div></div>
          </StyledLink>
          <StyledLink href="/">
            Cursos <div></div>
          </StyledLink>
          <StyledLink href="/">
            Faculdade <div></div>
          </StyledLink>
          <StyledLink href="/">
            Sobre <div></div>
          </StyledLink>
          <StyledLink href="/">
            Duvidas <div></div>
          </StyledLink>
        </StyledDiv>

        <StyledButton width="140px" height="35px" fontSize="11px">
          Conheça mais
          <Image src="./imgs/ArrowRight.svg" alt="arrow" width={15} height={15} />
        </StyledButton>
      </StyledHeader>
    </StyledContainer>
  );
}
