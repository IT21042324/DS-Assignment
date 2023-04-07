import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ItemMapperHome } from "../../components/ItemMappers";
import React from "react";
import { UseUserContext } from "../../context/useUserContext";
import { HomeBanner, ActionBanner } from "../../components/Banner";

export default function Home() {
  const { user1 } = UseUserContext();
  return (
    <div>
      <Header />
      {user1[0]?.role === "Buyer" ||
        (!user1[0] && (
          <>
            <HomeBanner />
            <Features />
            <ActionBanner />
            <ItemMapperHome />
          </>
        ))}

      <Footer />
    </div>
  );
}
