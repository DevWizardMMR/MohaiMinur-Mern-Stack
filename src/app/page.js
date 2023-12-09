import Container from "./ReuseableComponents/Container";
import IntroSlider from "./ReuseableComponents/IntroSlider";
import IntroductionSection from "./ReuseableComponents/IntroductionSection";
import MainNavbar from "./ReuseableComponents/MainNavbar";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <IntroSlider />
      <Container>
        <IntroductionSection />
      </Container>
    </>
  );
}
