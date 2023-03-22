import ActionBanner from "../../components/ActionBanner";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeBanner from "../../components/HomeBanner";
import MiniBanner from "../../components/MiniBanner";
import SmallBanner from "../../components/SmallBanner";

export default function Home() {
  const itemContext = useContext(ItemContext);
  const { dispatch, items } = itemContext;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:8081/api/product/");
        dispatch({
          type: "SetItems",
          payload: data,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [dispatch]);

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
