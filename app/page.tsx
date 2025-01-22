import FrequentAskedQuestions from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how -it-works";
import Navbar from "@/components/navbar";
import TestimonialMarquee from "@/components/testimony";
import { getUser } from "@/lib/action";

export default async function Home() {
  const session = await getUser();

  return (
    <div>
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
