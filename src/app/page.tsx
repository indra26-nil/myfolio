import About from "@/components/About";
import Contact from "@/components/Contact";
// import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
// import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        {/* <Projects /> */}
        {/* <Experience /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
