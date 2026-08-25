import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProblemSolution from "@/components/ProblemSolution";
import WhyUs from "@/components/WhyUs";
import Curriculum from "@/components/Curriculum";
import Fees from "@/components/Fees";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <ProblemSolution />
      <WhyUs />
      <Curriculum />
      <Fees />
      <FAQ />
      <CTA />
    </main>
  );
}
