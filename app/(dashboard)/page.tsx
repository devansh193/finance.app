"use client";
import Image from "next/image";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
    <div className="flex items-center justify-center gap-4 pt-4"> 
     {routes.map((route)=>(
      <Button 
      variant={"outline"}
      key={route.label} 
      onClick={()=>onClick(route.href)}
      >
        {route.label}</Button>
     ))}
    </div>
  );
};
