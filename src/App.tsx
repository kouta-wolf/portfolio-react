import { Header, Footer } from "./components/layout";
import { Hero, About, Portfolio, Social } from "./components/sections";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow pt-16 pb-16">
        <Hero />
        <About />
        <Portfolio />
        <Social />
      </div>
      <Footer />
    </div>
  );
}
