import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ItemMapperHome } from "../../components/ItemMappers";
import React from "react";
import { ActionBanner } from "../../components/Banner";
import { Slider } from "../../components/Slider";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Features />
      <ActionBanner />
      <ItemMapperHome />
      <Footer />
    </div>
  );
}
