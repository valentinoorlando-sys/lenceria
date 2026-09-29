import { Hero } from "@/components/home/Hero";
import { StockShowcase } from "@/components/home/StockShowcase";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductSection } from "@/components/home/ProductSection";
import {
  getFeaturedProducts,
  getNewProducts,
  getOfferProducts,
  getProductsByCategory,
  getRecommendedProducts,
} from "@/lib/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <StockShowcase />
      <CategoryGrid />
      <ProductSection
        title="Destacados"
        products={getFeaturedProducts()}
        viewAllHref="/destacados"
      />
      <ProductSection title="Novedades" products={getNewProducts()} viewAllHref="/novedades" />
      <ProductSection title="Ofertas" products={getOfferProducts()} viewAllHref="/ofertas" />
      <ProductSection
        title="Sets de regalo"
        products={getProductsByCategory("set-de-regalo")}
        viewAllHref="/categorias/set-de-regalo"
      />
      <ProductSection title="También te puede interesar" products={getRecommendedProducts()} />
    </>
  );
}
