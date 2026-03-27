import Navbar from "components/Navbar";
import Button from "components/ui/Button";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (<div className="home">
    <Navbar />
    <section className="hero">
      <div className="announce">
        <div className="dot">
          <div className="pulse"></div>
        </div>
        <p>Introducing Archify 2.0</p>
      </div>
      <h1>Build Beautiful Spaces at the speed of thought with Archify</h1>
      <p className="subtitle">Archify is a AI-First Design environment that helps you visualize, render, and ship architectural projects faster.</p>
      <Button variant="primary" size="lg">Get Started - It's Free!</Button>
    </section>
  </div>);
}
