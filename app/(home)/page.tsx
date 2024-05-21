import { TracingBeam } from "@/components/aceternity/tracing-beam";
import NavBar from "../components/nav/nav-bar";
import Faqs from "./components/ui/faqs";
import Footer from "./components/ui/footer";
import HeroSection from "./components/ui/hero-section";
import LanguageCarousel from "./components/ui/language-carousel";
import LastSection from "./components/ui/last-section";
import ProductDemo from "./components/ui/product-demo";
import Usp from "./components/ui/usp";
import { navItems } from "../components/nav/menus";
import { cn } from "@/lib/utils";
import { page } from "../styles/styles";

export default function Home() {
  return (
    <TracingBeam className={cn(page, 'px-0')}>
      <NavBar navItems={navItems} />
      <HeroSection />
      <Usp />
      <ProductDemo />
      <LanguageCarousel />
      <LastSection />
      <Faqs />
      <Footer />
    </TracingBeam>
  );
}
1;
