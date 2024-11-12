import TheNewHeader from "@/app/components/TheNewHeader";
import {interiorBusiness} from "@/app/utils/slides";
import Slider from "@/app/components/Slider";
import FirstSection from "@/app/components/FirstSection";
import {interiorProjects, interiorTabs} from "@/app/utils/portfolio";
import HomePortfolio from "@/app/components/HomePortfolio";
import Benefits from "@/app/components/Benefits";
import CallToAction from "@/app/components/CallToAction";
import PrefooterSection from "@/app/components/PrefooterSection";
import {interiorData} from "@/app/utils/preFooter";
import Footer from "@/app/components/Footer";

export default function InteriorPage(){
    return (
        <>
            <TheNewHeader/>
            <Slider slides={interiorBusiness}/>
            <FirstSection/>
            <HomePortfolio tabs={null} projects={interiorProjects}/>
            <Benefits/>
            <CallToAction/>
            <PrefooterSection content={interiorData}/>
            <Footer/>
        </>
    );
}