import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center ">
      <div className="space-y-6 text-center flex flex-col items-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          HAPPY CLIENT
        </h1>
       
        <div className="flex flex-row space-x-[16px]">
          <LoginButton>
            <Button variant="secondary" size="lg" className="w-[83px] h-[38px] px-[18px] py-[7px] rounded-[100px] border border-amber-500 justify-center items-center hover:bg-amber-500 text-white hover:text-black bg-black">
              Login
            </Button>
          </LoginButton>
          <RegisterButton>
            <Button variant="secondary" size="lg" className="w-[83px] h-[38px] px-[18px] py-[7px] rounded-[100px] border border-amber-500 justify-center items-center hover:bg-amber-500 text-white hover:text-black bg-black">
              Register
            </Button>
          </RegisterButton>
        </div>
      </div>
    </main>
  );
}
