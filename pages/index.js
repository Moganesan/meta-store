import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Banner from "../components/banner";
import Categories from "../components/categories";
import FeaturedBrands from "../components/featuredBrands";
import TodaysDeal from "../components/todaysDeal";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <FeaturedBrands />
      <TodaysDeal />
    </div>
  );
}
