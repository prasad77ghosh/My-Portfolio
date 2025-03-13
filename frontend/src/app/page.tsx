import SplashScreen from "@/components/global/spalsh-screen";
import { HeroSection } from "@/components/home/hero/hero";

export default function Home() {
  return (
    <div className="h-screen min-h-screen overflow-y-auto">
      {/* <HeroSection /> */}
      <SplashScreen />
    </div>
  );
}
