import Image from "next/image";
import {
  FacebookLogoIcon,
  GoogleLogoIcon,
  AppleLogoIcon,
} from "@/components/Icons";

export default function SignInPage() {
  return (
    <main className="h-screen w-full flex flex-row">
      {/* sign in */}
      <div className="bg-[#010714] w-1/2 h-screen flex flex-col space-y-[73px] justify-center items-center ">
        <h1 className="text-white text-5xl font-medium ml-[35px]">
          WelCome back Happy Client
        </h1>
        <form
          className="flex flex-col space-y-[22px]"
          action="/dashboard"
          method="post"
        >
          {/* email */}
          <div className=" w-[556px] h-[85px] flex flex-col space-y-[6px] border-b-[2px] border-[#192641]">
            <label
              htmlFor="email_id"
              className="text-[#4D525B] text-xl font-normal"
            >
              Email
            </label>

            <input
              type="email"
              id="email_id"
              placeholder="Email"
              className="text-white bg-[#010714] text-2xl font-normal focus:outline-none"
            />
          </div>

          {/* password */}
          <div className=" w-[556px] h-[85px] flex flex-col space-y-[6px] border-b-[2px] border-[#192641]">
            <label
              htmlFor="password_id"
              className="text-[#4D525B] text-xl font-normal"
            >
              Password
            </label>
            <input
              type="password"
              id="password_id"
              placeholder="password"
              className="text-white bg-[#010714] text-2xl font-normal focus:outline-none"
            />
          </div>

          {/* repeat password */}
          <div className=" w-[556px] h-[85px] flex flex-col space-y-[6px] border-b-[2px] border-[#192641]">
            <label
              htmlFor="repeat_password_id"
              className="text-[#4D525B] text-xl font-normal"
            >
              Repeat Password
            </label>
            <input
              type="password"
              id="repeat_password_id"
              placeholder="Repeat password"
              className="text-white bg-[#010714] text-2xl font-normal focus:outline-none"
            />
          </div>

          {/* remember me and forgot password */}
          <div className="flex flex-row space-x-[259px] items-center">
            <div className="flex flex-row space-x-[5px] items-center">
              <input
                type="checkbox"
                id="remember_me_id"
                className="w-[22px] h-[22px]"
              />
              <label
                htmlFor="remember_me_id"
                className="text-[#4D525B] text-xl font-normal"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-[#F9B13C] text-xl font-normal">
              Forgot password
            </a>
          </div>

          {/* Login button */}
          <button className="bg-[#101C32] w-[556px] h-[62px] text-2xl font-normal text-[#F9B13C] rounded-xl">
            Login
          </button>

          {/* sign in with */}
          <div className="flex flex-row space-x-[8px]">
            <span className="text-[#808389] text-[22px] font-normal">
              Sign in with
            </span>
            <div className="rounded-[5px] w-8 h-8 bg-[#15213A] flex justify-center items-center">
              <AppleLogoIcon />
            </div>
            <div className="rounded-[5px] w-8 h-8 bg-[#15213A] flex justify-center items-center">
              <GoogleLogoIcon />
            </div>
            <div className="rounded-[5px] w-8 h-8 bg-[#15213A] flex justify-center items-center">
              <FacebookLogoIcon />
            </div>
          </div>
        </form>
      </div>

      {/* image */}
      <div className="w-1/2 h-screen relative">
        <Image
          src="/images/Rectangle 2090.png"
          layout="fill"
          objectFit="cover"
          alt="sign in"
        />
      </div>
    </main>
  );
}
