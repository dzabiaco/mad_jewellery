import { Html, Head, Main, NextScript } from "next/document";
import {Fragment} from "react";
// import {useTranslations} from "next-intl";
import TheNewHeader from "@/app/components/TheNewHeader";
import Slider from "@/app/components/Slider";
import FirstSection from "@/app/components/FirstSection";
import HomePortfolio from "@/app/components/HomePortfolio";
import Benefits from "@/app/components/Benefits";
import CallToAction from "@/app/components/CallToAction";
import PrefooterSection from "@/app/components/PrefooterSection";
import Footer from "@/app/components/Footer";

import {slidesHome} from "@/app/utils/slides";
import {homeTabs, homeProjects} from "@/app/utils/portfolio";
import {homeData} from "@/app/utils/preFooter";

export default function Home() {
  return (
      <>
        {/*<Header/>*/}
          <TheNewHeader/>
          <Slider slides={slidesHome}/>
          <FirstSection/>
          <HomePortfolio tabs={homeTabs} projects={homeProjects}/>
          <Benefits/>
          <CallToAction/>
          <PrefooterSection content={homeData}/>
          <Footer/>
      </>
  );
}
