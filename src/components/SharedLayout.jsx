import React from "react";
import Features from "./Features";
import Hero from "./Hero";
import Header from "./Header";
import Steps from "./Steps";
import Testimonials from "./Testimonials";
import TopDestinations from "./TopDestinations";
import Stars from "./Stars";
import Footer from "./Footer";
import CTA from "./CTA";

export default function SharedLayout() {
  return (
    <div>
      <div className="bg-hero-bg bg-no-repeat bg-right-top bg-contain">
        <Hero />
      </div>
      <Features />
      <TopDestinations />
      <Steps />
      <Testimonials />
      <Stars />
      <CTA />
    </div>
  );
}
