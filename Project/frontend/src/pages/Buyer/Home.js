import ActionBanner from "../../components/ActionBanner";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeBanner from "../../components/HomeBanner";
import MiniBanner from "../../components/MiniBanner";
import SmallBanner from "../../components/SmallBanner";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeBanner />
      <Features />
      <ActionBanner />
      <SmallBanner />
      <MiniBanner />
      <Footer />
    </div>
  );
}
