import ButtonGradient from "./assets/svg/ButtonGradient";
// import Button from "./components/Button";
import Header from "./components/Header";
4;
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
}
