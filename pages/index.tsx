import { Container } from "@mantine/core";
import HeaderResponsive from "../components/Header/Header";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import { Waves } from "../components/Waves/Waves";
import { useMantineTheme } from "@mantine/core";
import AffixComponent from "../components/Affix/Affix";
import Tokenomics from "../components/Tokenomics/Tokenomics";
import Roadmap from "../components/Roadmap/Roadmap";
import Whitepaper from "../components/Whitepaper/Whitepaper";

export default function HeroImageBackground() {
  return (
    <>
      <HeaderResponsive />
      <Container size={1400}>
        <Hero />
        <Container size="lg" mt={100}>
          <Roadmap />
          <Tokenomics />
        </Container>
      </Container>

      <Whitepaper />

      <Team />
      <Waves height={40} width={150} />

      <Footer />
      <AffixComponent />
    </>
  );
}
