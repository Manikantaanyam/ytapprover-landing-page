import { Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="p-6 flex flex-col items-center mt-20">
      <div className="flex gap-3 items-center bg-[#E7E9EC] border-t border-blue-500 rounded-full text-black p-2 px-3">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-medium">
          Simplify Your Video Approval Process
        </span>
      </div>
      <div className="text-center text-5xl mt-8 font-bold leading-tight">
        <p>All in One Place</p>
        <p>
          Review, Approve, and{" "}
          <span className="relative isolate text-[#ff0000] ms-4">
            Publish
            <span className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-white/5 rounded-full px-8  ms-3 border-t border-foreground shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-1 lg:top-2 lg:bottom-2 "></span>
          </span>
        </p>
      </div>
      <div className="mt-4 text-xl text-muted-foreground/90 text-center max-w-2xl">
        <p>
          Effortlessly approve video uploads and collaborate securely with your
          team, all while keeping control of your YouTube channel.
        </p>
      </div>
      <div className="mt-7 mx-auto flex gap-4">
        <Button className="bg-[#ff0000] hover:bg-[#ff0000]/80 text-white ">
          Get started
        </Button>
        <Button>
          star on github <Star />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
