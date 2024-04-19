import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { RegisterButton } from "@/components/auth/register-button";
import { LandingPageHorizontalIcon, LandingPageVerticalIcon } from "@/components/Icons";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center relative">
      <div className=" flex flex-row items-center mt-[32px] space-x-[1328px] ml-[20px] absolute z-40">
        <h1 className="text-black text-2xl font-normal">HAPPY CLIENT</h1>

        <div className="flex flex-row space-x-[16px]">
          <LoginButton>
            <Button
              variant="secondary"
              size="lg"
              className="w-[83px] h-[38px] px-[18px] py-[7px] rounded-[100px] border border-amber-500 justify-center items-center hover:bg-amber-500 text-white hover:text-black bg-black"
            >
              Login
            </Button>
          </LoginButton>
          <RegisterButton>
            <Button
              variant="secondary"
              size="lg"
              className="w-[83px] h-[38px] px-[18px] py-[7px] rounded-[100px] border border-amber-500 justify-center items-center hover:bg-amber-500 text-white hover:text-black bg-black"
            >
              Register
            </Button>
          </RegisterButton>
        </div>
      </div>

      <div className="flex flex-col text-white font-normal -space-y-[180px] mt-[362px] ml-[22px] absolute z-40">
        <div className="flex flex-row">
          <h2 className="text-9xl">HAPPY CLIENT</h2>
          <h2 className="text-[32px] pt-[73px]">BILLBOARDS</h2>
        </div>
        <h2 className="text-white text-[438px]">AGENCY</h2>
      </div>

      <figure className="absolute z-30 -left-[30px] -top-[250px]">
        <img src="./images/Ellipse 481.png" className="w-[1200px] h-[1000px]" />
      </figure>

      <figure className="absolute z-30 -bottom-[0px] -right-[70px]">
        <img src="./images/Ellipse 480.png" className="w-[800px] h-[800px]" />
      </figure>

      <LandingPageHorizontalIcon />
      <LandingPageVerticalIcon />
    </main>
  );
}
