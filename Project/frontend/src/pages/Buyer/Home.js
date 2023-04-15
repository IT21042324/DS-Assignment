import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ItemMapperHome } from "../../components/ItemMapperHome";
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
      <div style={{ marginLeft: 90 }}>
        <h2>Featured Products</h2>
        <p>Discover a wide range of herbal products</p>
      </div>
      <ItemMapperHome />
      <Footer />
    </div>
  );
}
