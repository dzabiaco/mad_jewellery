import TheNewHeader from "@/app/components/TheNewHeader";
import {slidesBusiness} from "@/app/utils/slides";
import Slider from "@/app/components/Slider";
import FirstSection from "@/app/components/FirstSection";
import {businessProjects, businessTabs,} from "@/app/utils/portfolio";
import HomePortfolio from "@/app/components/HomePortfolio";
import Benefits from "@/app/components/Benefits";
import CallToAction from "@/app/components/CallToAction";
import PrefooterSection from "@/app/components/PrefooterSection";
import Footer from "@/app/components/Footer";
import {businessData} from "@/app/utils/preFooter";

export default function BusinessPage(){
    return (
        <>
            <TheNewHeader/>
            <Slider slides={slidesBusiness}/>
            <FirstSection/>
            <HomePortfolio tabs={null} projects={businessProjects}/>
            <Benefits/>
            <CallToAction/>
            <PrefooterSection content={businessData}/>
            <Footer/>
        </>
    );
}