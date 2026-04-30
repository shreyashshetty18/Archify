import Navbar from "components/Navbar";
import type { Route } from "./+types/home";
import { ArrowRight, Layers } from "lucide-react";
import Button from "components/ui/Button";

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
      <div className="actions">
        <a href="#upload" className="cta">Start Building <ArrowRight /></a>
        <Button variant="outline" size="lg" className="demo">Watch Demo</Button>

      </div>
      <div id="upload" className="upload-shell">
        <div className="grid-overlay"></div>
        <div className="upload-card">
          <div className="upload-head">
            <div className="upload-icon">
              <Layers className="icon" />
            </div>
            <h3>Upload your floor plan</h3>
            <p>Supports JPG, PNG, formats upto 10MB</p>
          </div>
          <p>Upload Images</p>
        </div>
      </div>
    </section>
    <section className="projects">
      <div className="section-inner">
        <div className="section-head">
          <div className="copy">
            <h2>Our Projects</h2>
            <p>Explore the latest architectural designs created with Archify</p>
          </div>
        </div>

        <div className="projects-grid">
          <div className="project-card group">
            <div className="preview">
              <img src="https://www.roomsketcher.com/content/uploads/2021/12/2-bedroom-house-3d-floor-plan.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>);
}
