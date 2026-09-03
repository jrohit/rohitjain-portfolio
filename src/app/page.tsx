import Bio from "@/components/Bio";
import Career from "@/components/Career";
import Masthead from "@/components/Masthead";
import Tracks from "@/components/Tracks";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 sm:px-8">
      <Masthead />
      <main className="flex flex-col gap-16 pt-14 sm:gap-20 sm:pt-16">
        <Bio />
        <Tracks />
        <Work />
        <Career />
      </main>
    </div>
  );
}
