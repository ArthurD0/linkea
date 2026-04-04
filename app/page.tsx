import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import Differentiation from "./components/Differentiation";
import Whitelist from "./components/Whitelist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <HowItWorks />
        <Differentiation />
        <Whitelist />
      </main>
      <Footer />
    </>
  );
}
