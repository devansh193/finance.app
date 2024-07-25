"use client";
import Image from "next/image";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { DataGrid } from "@/components/data.grid";
export default function Home() {
  const {onOpen} = useNewAccount();
  const router = useRouter();

  const routes = [
    {
      href: "/sign-in",
      label: "Sign in",
    },
    {
      href: "/sign-up",
      label: "Sign up",
    }
  ]

  const onClick = (href: string) => {
    router.push(href);

  };
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 "> 
      <DataGrid/>
    </div>
  );
};
