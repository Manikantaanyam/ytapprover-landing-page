import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[100] p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-16 backdrop-blur-sm bg-white/30 dark:bg-zinc-900/30">
      <div className="font-bold  text-[20px]">YtApprover</div>
      <div>
        <ul className="flex gap-5 font-medium">
          <Button variant={"ghost"}>Products</Button>
          <Button variant={"ghost"}>Features</Button>
          <Button variant={"ghost"}>Docs</Button>
          <Button variant={"ghost"}>Pricing</Button>
        </ul>
      </div>
      <div className="flex gap-5">
        <Button className="font-medium text-white bg-[#ff0000] hover:bg-[#ff0000]/90 p-2 rounded-md">
          Get started
        </Button>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
