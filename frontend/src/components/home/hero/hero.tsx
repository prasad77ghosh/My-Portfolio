import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DotPattern } from "../../magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { Spotlight } from "../../ui/spotlight-new";

export const HeroSection = () => (
  <>
    <div className="relative w-full h-screen max-h-screen overflow-hidden">
      <div></div>
      <div></div>
    </div>
  </>
  // <div className="relative w-full h-screen py-10 lg:py-20 overflow-y-auto flex justify-center">
  //   <DotPattern
  //     width={20}
  //     height={20}
  //     // glow={true}
  //     cx={1}
  //     cy={1}
  //     cr={1}
  //     className={cn(
  //       "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
  //     )}
  //   />
  //   <div className="container mx-auto absolute">
  //     <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
  //       <div className="flex gap-4 flex-col">
  //         <div>
  //           <Badge variant="outline">We&apos;re live!</Badge>
  //         </div>
  //         <div className="flex gap-4 flex-col">
  //           <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
  //             This is the start of something!
  //           </h1>
  //           <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
  //             Managing a small business today is already tough. Avoid further
  //             complications by ditching outdated, tedious trade methods. Our
  //             goal is to streamline SMB trade, making it easier and faster than
  //             ever.
  //           </p>
  //         </div>
  //         <div className="flex flex-row gap-4">
  //           <Button size="lg" className="gap-4" variant="outline">
  //             Jump on a call <PhoneCall className="w-4 h-4" />
  //           </Button>
  //           <Button size="lg" className="gap-4">
  //             Sign up here <MoveRight className="w-4 h-4" />
  //           </Button>
  //         </div>
  //       </div>
  //       <div className="bg-muted rounded-md aspect-square"></div>
  //     </div>
  //   </div>
  // </div>
);
