import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Banner from "../components/banner";
import Categories from "../components/categories";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}
