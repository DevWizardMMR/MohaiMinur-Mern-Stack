"use client"
import Container from "./ReuseableComponents/Container";
import IntroSlider from "./ReuseableComponents/IntroSlider";
import MainNavbar from "./ReuseableComponents/MainNavbar";
import "swiper/css";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <Container><IntroSlider/></Container>
    </>
  );
}
