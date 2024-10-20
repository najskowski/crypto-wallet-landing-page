import Faq from "./components/faq";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import GetStarted from "./components/get-started";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <GetStarted />
      <Faq/>
      <Footer />
    </>
  );
}
