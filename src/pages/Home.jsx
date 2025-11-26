import React from "react";
import Hero from "../sections/Hero";
import Buttons from "../components/Buttons";
import Partners from "../sections/Patners";
import AvatarGroup from "../sections/AvatarGroup";
import ReviewsSection from "../sections/ReviewsSection";
import OurProcessSection from "../sections/OurProcessSection";
import ToolsScrollersSection from "../sections/ToolScrollersSection";
import InfiniteSentence from "../sections/InfiniteSentence";
import InfiniteScroller from "../sections/InfiniteScroller";
import SpotsLeft from "../sections/FreeGuidance";
import MorphText from "../sections/MorphText";
import ProjectsSection from "../sections/ProjectsSection";
import StatsSection from "../sections/StatsSection";
import ActiveShimmer from "../components/ActiveShimmer";
import ContactForm from "../sections/ContactForm";
import BadgesSection from "../sections/BadgesSection";
import FreeGuidance from "../sections/FreeGuidance";
import RegisterButton from "../components/RegisterButton";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="home-page">
      
      <Hero />
      <Buttons />
      <Partners />
      <AvatarGroup />
      <StatsSection />
      <FreeGuidance />
      <RegisterButton />
      <OurProcessSection />

    

      <ReviewsSection />
      <BadgesSection />
     
      <ProjectsSection />
      <InfiniteScroller />

      <ContactForm />
    
      <Footer />  
    </div>
  );
}
