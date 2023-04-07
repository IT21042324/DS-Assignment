import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ItemMapperHome } from "../../components/ItemMappers";
import React from "react";
import { HomeBanner, ActionBanner } from "../../components/Banner";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Features />
      <ActionBanner />
      <ItemMapperHome />
      <Footer />
    </div>
  );
}
