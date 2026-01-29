import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeatureCards } from "@/components/feature-cards";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeatureCards />
      <Footer />
    </main>
  );
}