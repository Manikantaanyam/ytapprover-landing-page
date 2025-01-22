"use client";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const session = useSession();
  const user = session.data?.user;

  useEffect(() => {
    if (user) {
      router.push("/user");
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("pls fill both fields");
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password.");
    } else {
      router.push("/user");
    }
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="w-[100vw] mt-4 flex justify-center items-center">
        <div className="flex flex-col items-center border max-w-xl min-h-fit justify-center gap-4 p-6 shadow-md ">
          <div className="flex flex-col items-center space-y-3 ">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome to
              <span className="text-[#ff0000] font-bold"> YtApprover</span>
            </h1>
            <p className="text-gray-700">Login or create your account</p>
          </div>
          <div className="mt-4 w-80">
            <form className="flex flex-col gap-3 ">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />

              <label htmlFor="password">password</label>
              <Input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
              />
              <Button
                onClick={handleSubmit}
                type="submit"
                className=" mt-2 bg-[#ff0000]/80 hover:bg-[#ff0000]/100"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <Button onClick={() => signIn("google")} className="w-80">
              Continue with Google
            </Button>
            <p className="max-w-xs text-center text-xs text-gray-700">
              By continuing, you agree to Feed-Wall's Terms of Service and
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
