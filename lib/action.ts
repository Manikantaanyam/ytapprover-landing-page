import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const getUser = async () => {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/user"); // Server-side redirect
  }

  return session;
};

export { getUser };
