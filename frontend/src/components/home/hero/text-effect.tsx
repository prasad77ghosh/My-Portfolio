import { MorphingText } from "@/components/magicui/morphing-text";

const texts = [
  "Frontend Developer",
  "Backend Developer",
  "Ful-Stack Developer",
];

export function TextEffect() {
  return <MorphingText texts={texts} />;
}
