import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Segmentos from "@/components/Segmentos";
import Numeros from "@/components/Numeros";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Segmentos />
      <Numeros />
      <Sobre />
      <Footer />
    </div>
  );
};

export default Index;
