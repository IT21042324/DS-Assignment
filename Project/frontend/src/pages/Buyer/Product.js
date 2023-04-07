import Features from "../../components/Features";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ItemMapper } from "../../components/ItemMappers";
import { UseUserContext } from "../../context/useUserContext";

export default function Product() {
  const { user1 } = UseUserContext();
  return (
    <div>
      <Header />

      {user1[0]?.role === "Buyer" ||
        (!user1[0] && (
          <>
            <Features />
            <ItemMapper />
          </>
        ))}

      <Footer />
    </div>
  );
}
