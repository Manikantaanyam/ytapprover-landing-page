"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/");
  }

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div>
        <p>
          <span className="font-bold text-2xl text-[#ff0000]">welcome</span>{" "}
          {session?.user?.email}
        </p>
      </div>
      <br />
      <div>
        <Button onClick={() => signOut()}>signout</Button>
      </div>
    </div>
  );
}
