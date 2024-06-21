import About from '@/components/pagSobre/About';
import Header from '@/components/pagInicial/Header';
import LandingPage from '@/components/pagInicial/LandingPage';
import Jornada from '@/components/pagJornada/Jornada';
import ModuloFormação from '@/components/pagModulos/ModuloFormação';

export default function Home() {
  return (
    <>
      <Header />
      <LandingPage />
      <About />
      <Jornada />
      <ModuloFormação />
    </>
  );
}
