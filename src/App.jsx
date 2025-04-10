import React from "react";
import AccordionSection from "./components/Accordion/AccordionSection";
import Slider from "./components/Slider/Slider";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1D1D1D",
        padding: "48px 0px",
      }}
      className="d-flex flex-column gap-5"
    >
      <Slider />
      <AccordionSection />
    </div>
  );
}
