import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/app/components/Header";
import HomeSection from "@/app/components/HomeSection";
import {Fragment} from "react";
import {useTranslations} from "next-intl";
import TheNewHeader from "@/app/components/TheNewHeader";
import Footer from "@/app/components/Footer";
import BlogSection from "@/app/components/BlogSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import SliderMain from "@/app/components/SliderMain";
import Testimonials from "@/app/components/Testimonials";
import MainProducts from "@/app/components/MainProducts";


export default function Home() {
  return (
      <Fragment>
        {/*<Header/>*/}
          <TheNewHeader/>
          <SliderMain/>
          <BenefitsSection/>
          <MainProducts/>
          <Testimonials/>
          <BlogSection/>
          <Footer/>
      </Fragment>
  );
}
