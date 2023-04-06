import Features from "../../components/Features";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ItemMapper } from "../../components/ItemMappers";
import React from "react";

export default function Product() {
  return (
    <div>
      <Header />
      <Features />
      <ItemMapper />
      <Footer />
    </div>
  );
}
