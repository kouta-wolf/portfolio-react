import { Header, Footer } from "./components/layout";
import { Hero, About, Portfolio, Social } from "./components/sections";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-base">
      <Header />
      <main className="text-grow">
        <Hero />
        <About />
        <Portfolio />
        <Social />
      </main>
      <Footer />
    </div>
  );
}
