import Navbar from "/src/components/Shared/Navbar";
import Hero from "/src/components/Shared/Hero";
import Footer from "/src/components/Shared/Footer";

import AboutSection from "../components/Home/AboutSection";
import AboutSection2 from "../components/Home/AboutSection2";
import AboutSection3 from "../components/Home/AboutSection3";

import GoalsSection from "../components/Home/GoalsSection";
import GoalsSection2 from "../components/Home/GoalsSection2";
import GoalsSection3 from "../components/Home/GoalsSection3";

import AchievementsSection from "../components/Home/AchievementsSection";
import AchievementsSection2 from "../components/Home/AchievementsSection2";
import AchievementsSection3 from "../components/Home/AchievementsSection3";
import AchievementsSection4 from "../components/Home/AchievementsSection4";

import FoundingSocietiesSection from "../components/Home/FoundingSocietiesSection";
import FoundingSocietiesSection2 from "../components/Home/FoundingSocietiesSection2";

import MembersSection from "../components/Home/MembersSection";
import MembersSection2 from "../components/Home/MembersSection2";

import StrategicPlanSection from "../components/Home/StrategicPlanSection";
import StrategicPlanSection2 from "../components/Home/StrategicPlanSection2";

import QuranPrizeSection from "../components/Home/QuranPrizeSection";
import QuranPrizeSection2 from "../components/Home/QuranPrizeSection2";
import QuranPrizeSection3 from "../components/Home/QuranPrizeSection3";
import QuranPrizeSection4 from "../components/Home/QuranPrizeSection4";

import LatestNewsSection from "../components/Home/LatestNewsSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* <AboutSection /> */}
      <AboutSection2 />
      {/* <AboutSection3 /> */}

      {/* <MembersSection/> */}
      <MembersSection2 />

      {/* <GoalsSection /> */}
      <GoalsSection2 />
      {/* <GoalsSection3 /> */}

      {/* <QuranPrizeSection /> */}
      <QuranPrizeSection2 />
      {/* <QuranPrizeSection3 /> */}
      {/* <QuranPrizeSection4 /> */}

      {/* <AchievementsSection /> */}
      {/* <AchievementsSection3 /> */}
      <AchievementsSection2 />
      {/* <AchievementsSection4/> */}

      {/* <FoundingSocietiesSection/> */}
      <FoundingSocietiesSection2 />

<LatestNewsSection/>
      <StrategicPlanSection />
      {/* <StrategicPlanSection2/> */}



       <Footer />
    </>
  );
}

export default Home;
