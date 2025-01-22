"use client";
import { signIn } from "next-auth/react";

import { Menu } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "@radix-ui/react-dropdown-menu";

const navData = [
  {
    id: 1,
    name: "Products",
    link: "/products",
  },
  {
    id: 2,
    name: "Features",
    link: "/features",
  },
  { id: 3, name: "Docs", link: "/docs" },
  {
    id: 4,
    name: "Pricing",
    link: "/pricing",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[100] p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center px-10 lg:px-16 backdrop-blur-sm bg-white/30 dark:bg-zinc-900/30">
      <div className="font-bold  text-[20px]">YtApprover</div>
      <div>
        <ul className=" hidden lg:flex gap-5 font-medium">
          {navData.map(({ id, link, name }) => (
            <li key={id}>
              <a href={link}>
                <Button variant={"ghost"}>{name}</Button>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-5">
        <Button
          onClick={() => signIn()}
          className="font-medium hidden lg:flex text-white bg-[#ff0000] hover:bg-[#ff0000]/90 p-2 rounded-md"
        >
          Get started
        </Button>
        <div className="flex gap-6 items-center ">
          <div>
            <ModeToggle />
          </div>
          <div className="cursor-pointer flex lg:hidden  ">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="z-[200] rounded-lg overflow-hidden  "
              >
                <ul className=" flex  flex-col font-medium ">
                  {navData.map(({ id, link, name }) => (
                    <li key={id}>
                      <a href={link}>
                        <Button
                          className="w-full justify-start"
                          variant={"ghost"}
                        >
                          {name}
                        </Button>
                      </a>
                    </li>
                  ))}
                </ul>
                <Separator className="dark:bg-white/30 bg-black/30 h-[1px] mt-2 mb-4" />
                <Button
                  onClick={() => signIn()}
                  className="font-medium w-full   text-white bg-[#ff0000] hover:bg-[#ff0000]/90 p-2 rounded-md"
                >
                  Get started
                </Button>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
