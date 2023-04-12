import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ItemMapper } from "../../components/ItemMappers";
import { PageHeader } from "../../components/Banner";

export default function Product() {
  return (
    <div>
      <Header />
      <PageHeader />
      <div style={{ marginLeft: 90 }}>
        <h2>Featured Products</h2>
        <p>Discover a wide range of herbal products</p>
      </div>
      <ItemMapper />
      <Footer />
    </div>
  );
}
