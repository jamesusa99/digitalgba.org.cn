import { HeroSection } from "@/components/HeroSection";
import { NewsTicker } from "@/components/NewsTicker";
import { BashuCultureSection } from "@/components/BashuCultureSection";
import { InstituteMap } from "@/components/InstituteMap";
import { ValuesSection } from "@/components/ValuesSection";
import { VideoSection } from "@/components/VideoSection";
import { PartnershipSection } from "@/components/PartnershipSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker />
      <BashuCultureSection />
      <InstituteMap />
      <ValuesSection />
      <VideoSection />
      <PartnershipSection />
    </>
  );
}
