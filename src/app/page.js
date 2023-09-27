import Container from "./ReuseableComponents/Container";
import IntroSlider from "./ReuseableComponents/IntroSlider";
import IntroductonSection from "./ReuseableComponents/IntroductonSection";
import MainNavbar from "./ReuseableComponents/MainNavbar";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <IntroSlider />
      <Container>
        <IntroductonSection />
      </Container>
    </>
  );
}
