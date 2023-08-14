import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSignIn } from "@clerk/nextjs";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <></>;
}
