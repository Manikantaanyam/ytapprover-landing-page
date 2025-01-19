import FrequentAskedQuestions from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how -it-works";
import Navbar from "@/components/navbar";
import TestimonialMarquee from "@/components/testimony";

export default function Home() {
  return (
    <div className="h-[300vh] ">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TestimonialMarquee />
      <FrequentAskedQuestions />
      <Footer />
    </div>
  );
}
