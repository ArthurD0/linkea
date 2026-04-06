import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Platform from "./components/Platform";
import HubMap from "./components/HubMap";
import Whitelist from "./components/Whitelist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Platform />
        <HubMap />
        <Whitelist />
      </main>
      <Footer />
    </>
  );
}
