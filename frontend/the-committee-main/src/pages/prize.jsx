import Navbar from "/src/components/Prize/Navbar";
import CarouselSection from "/src/components/Prize/CarouselSection";
import VisionMissionSection from "/src/components/Prize/VisionMissionSection";
import SupervisoryCommittee from "/src/components/Prize/SupervisoryCommittee";
import CompetitionGoalsSection from "/src/components/Prize/CompetitionGoalsSection";
import CompetitionTracksSection from "/src/components/Prize/CompetitionTracksSection";
import CompetitionBranchesSection from "/src/components/Prize/CompetitionBranchesSection";
import CompetitionTermsSection from "/src/components/Prize/CompetitionTermsSection";
import CompetitionPrizesSection from "/src/components/Prize/CompetitionPrizesSection";
import CompetitionPrizesTable from "/src/components/Prize/CompetitionPrizesTable";
import AwardPlanSection from "/src/components/Prize/AwardPlanSection";
import ExecutionPlanSection from "/src/components/Prize/ExecutionPlanSection";
import AwardingPhaseSection from "/src/components/Prize/AwardingPhaseSection";
import CompetitionPhaseOne from "/src/components/Prize/CompetitionPhaseOne";
import CompetitionPhaseTwo from "/src/components/Prize/CompetitionPhaseTwo";
import CompetitionPhaseThree from "/src/components/Prize/CompetitionPhaseThree";
import CompetitionFinalClarifications from "/src/components/Prize/CompetitionFinalClarifications";
import AppFooter from "/src/components/Prize/AppFooter";
 
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
