import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { HeaderLogo } from "./headerLogo";
import { Navigation } from "./navigation";
import { Loader2 } from "lucide-react";
import { WelcomeMsg } from "./welcomeMsg";

export const Header = () =>{    
    
    return (
        <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-10 lg:px-14 pb-46">
            <div className="max-w-screen-2xl mx-auto ">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">    
                        <HeaderLogo/>
                        <Navigation/>
                    </div>
                    <ClerkLoaded>
                    <UserButton afterSwitchSessionUrl="/"/>
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="size-8 animate-spin text-gray-200"/>
                    </ClerkLoading> 
                </div>
                <WelcomeMsg/>
            </div>
        </header>
    );
};
export default Header;