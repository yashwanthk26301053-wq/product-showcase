import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <Greeting name="Sam" />
      <ProductCard title="Keyboard" price={49} inStock={true} />
      <ProductCard title="Monitor" price={199} inStock={false} />
    </main>
  );
}
