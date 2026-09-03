import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductSection } from "@/components/home/ProductSection";
import {
  getFeaturedProducts,
  getNewProducts,
  getOfferProducts,
  getComboProducts,
  getRecommendedProducts,
} from "@/lib/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ProductSection
        title="Destacados"
        products={getFeaturedProducts()}
        viewAllHref="/destacados"
      />
      <ProductSection title="Novedades" products={getNewProducts()} viewAllHref="/novedades" />
      <ProductSection title="Ofertas" products={getOfferProducts()} viewAllHref="/ofertas" />
      <ProductSection title="Combos y kits" products={getComboProducts()} viewAllHref="/categorias/combos" />
      <ProductSection title="También te puede interesar" products={getRecommendedProducts()} />
    </>
  );
}
