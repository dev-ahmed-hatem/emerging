import Navbar from "../components/Prize/Navbar";
import CarouselSection from "../components/Prize/CarouselSection";
import VisionMissionSection from "../components/Prize/VisionMissionSection";
import SupervisoryCommittee from "../components/Prize/SupervisoryCommittee";
import CompetitionGoalsSection from "../components/Prize/CompetitionGoalsSection";
import CompetitionTracksSection from "../components/Prize/CompetitionTracksSection";
import CompetitionBranchesSection from "../components/Prize/CompetitionBranchesSection";
import CompetitionTermsSection from "../components/Prize/CompetitionTermsSection";
import CompetitionPrizesSection from "../components/Prize/CompetitionPrizesSection";
import CompetitionPrizesTable from "../components/Prize/CompetitionPrizesTable";
import AwardPlanSection from "../components/Prize/AwardPlanSection";
import ExecutionPlanSection from "../components/Prize/ExecutionPlanSection";
import AwardingPhaseSection from "../components/Prize/AwardingPhaseSection";
import CompetitionPhaseOne from "../components/Prize/CompetitionPhaseOne";
import CompetitionPhaseTwo from "../components/Prize/CompetitionPhaseTwo";
import CompetitionPhaseThree from "../components/Prize/CompetitionPhaseThree";
import CompetitionFinalClarifications from "../components/Prize/CompetitionFinalClarifications";
import AppFooter from "../components/Prize/AppFooter";
 
function Prize() {
  return (
    <>
      <Navbar />
      <CarouselSection />
      <VisionMissionSection />
      <SupervisoryCommittee />
      <CompetitionGoalsSection />
      <CompetitionTracksSection />
      <CompetitionBranchesSection />
      <CompetitionTermsSection />
      <CompetitionPrizesSection />
      <CompetitionPrizesTable />
      <AwardPlanSection />
      <ExecutionPlanSection />
      <AwardingPhaseSection />
      <CompetitionPhaseOne />
      <CompetitionPhaseTwo />
      <CompetitionPhaseThree />
      <CompetitionFinalClarifications />

      <AppFooter />

 

       {/* <Footer /> */}
    </>
  );
}

export default Prize;
