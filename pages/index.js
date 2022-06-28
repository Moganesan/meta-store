import Banner from "../components/banner";
import Categories from "../components/categories";
import FeaturedBrands from "../components/featuredBrands";
import TodaysDeal from "../components/todaysDeal";
import FeaturedProducts from "../components/featuredProducts";
import CategoryProducts from "../components/categoryProducts";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <FeaturedBrands />
      <TodaysDeal />
      <FeaturedProducts />
      <CategoryProducts category={"Fruits & Vegitables"} />
    </>
  );
}
