import NavBar from "./components/nav/nav-bar";
import HeroSection from "./components/ui/hero-section";

export default function Home() {
  return (
    <main className="flex animate-in flex-col items-center gap-12 w-full px-4 mx-auto max-w-7xl">
      <NavBar />

      <HeroSection />
    </main>
  );
}
1;
