import {
  StyledContainerInfo,
  StyledInfos,
  StyledContainerImgLeft,
  StyledContainerImgRight,
  StyledContainerOxy
} from './LandingPage.styled';
import { StyledButton } from './Header.styled';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <StyledContainerInfo>
      <StyledContainerImgLeft>
        <Image src="./imgs/Left 1 (1).svg" alt="left" width={380} height={400} />
      </StyledContainerImgLeft>

      <StyledInfos>
        <h1>Construa seu futuro com o Incode Tech School</h1>
        <p>
          O Incode Tech School é uma formação completa de programação destinado para todos os
          públicos
        </p>
        <StyledButton width="225px" height="53px" fontSize="16px">
          Conheça mais
          <Image src="./imgs/ArrowRight.svg" alt="arrow" width={18} height={18} />
        </StyledButton>

        <StyledContainerOxy>
          <h2>O Incode Tech School é um produto Oxygeni</h2>
          <Image src="./imgs/LogoOxygeniBranco 1.svg" alt="Logo Oxy" width={150} height={150} />
        </StyledContainerOxy>
      </StyledInfos>

      <StyledContainerImgRight>
        <Image src="./imgs/Right 1.svg" alt="left" width={380} height={400} />
      </StyledContainerImgRight>
    </StyledContainerInfo>
  );
}
