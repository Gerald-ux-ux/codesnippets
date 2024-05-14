import NavBar from "./components/nav/nav-bar";
import Faqs from "./components/ui/faqs";
import Footer from "./components/ui/footer";
import HeroSection from "./components/ui/hero-section";
import LanguageCarousel from "./components/ui/language-carousel";
import LastSection from "./components/ui/last-section";
import ProductDemo from "./components/ui/product-demo";
import Usp from "./components/ui/usp";

export default function Home() {
  return (
    <main className="flex animate-in flex-col items-center gap-12 w-full px-4 mx-auto max-w-7xl">
      <NavBar />
      <HeroSection />
      <Usp />
      <ProductDemo />
      <LanguageCarousel />
      <LastSection />
      <Faqs />
      <Footer />
    </main>
  );
}
1;
