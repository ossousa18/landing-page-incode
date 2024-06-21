import CardAbout from '@/components/pagSobre/CardAbout';
import { StyledContainerAbout, StyledTextAbout, StyledContainerCard } from './About.styled';

export default function About() {
  return (
    <StyledContainerAbout>
      <StyledTextAbout>
        <h1>Sobre o Incode</h1>
        <h2>
          Bem-vindo à InCode, a escola que acredita que todos têm o potencial de aprender
          programação de uma forma acessível e gradual. Aqui, descomplicamos o universo da
          codificação, guiando nossos alunos por uma jornada educacional que começa com o básico e
          se desenvolve a cada módulo.
        </h2>
      </StyledTextAbout>

      <StyledContainerCard>
        <CardAbout
          src="./imgs/Vector.svg"
          tiltle="Sobre o Incode"
          paragraph="O Incode é uma escola de programação com três módulos. O primeiro abrange o básico, introduzindo a programação. O segundo, mais avançado, divide-se em trilhas de frontend, backend e UX/UI. No terceiro módulo, em parceria com empresas, foca em desafios do mercado de trabalho, proporcionando uma experiência prática e alinhada com o ambiente corporativo."
        />
        <CardAbout
          src="./imgs/Desktop.svg"
          tiltle="Nossa Missão"
          paragraph="Oferecemos uma formação abrangente que vai além das habilidades técnicas, incluindo aspectos comportamentais essenciais para o sucesso profissional. Além disso, promovemos oportunidades inclusivas para jovens, gerando um impacto social significativo em parceria com diversas empresas do setor."
        />
        <CardAbout
          src="./imgs/HourglassSimpleMedium.svg"
          tiltle="Nossa história"
          paragraph="Desde 2017, o Incode destaca-se na educação em programação, sendo uma escola dinâmica comprometida com a excelência e inovação. Nosso diferencial é a estreita colaboração com talentosos profissionais da Oxygeni, proporcionando aos alunos não apenas conhecimento teórico, mas também insights práticos, enriquecendo sua jornada de aprendizado."
        />
      </StyledContainerCard>
    </StyledContainerAbout>
  );
}
