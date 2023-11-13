import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="container mx-auto px-6">
      <Navbar />
      <main className="pt-24 min-h-[200vh]">
        <Hero />
      </main>
    </div>
  );
}

export default App;
