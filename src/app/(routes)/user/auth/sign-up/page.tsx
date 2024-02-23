import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogoIcon,
  GoogleLogoIcon,
  AppleLogoIcon,
} from "@/components/Icons";

export default function SignUpPage() {
  return (
    <main className="h-screen w-full flex flex-row">
      {/* sign in */}
      <div className="bg-[#010714] w-1/2 h-screen flex flex-col space-y-[73px] justify-center items-center ">
        <h1 className="text-white text-5xl font-medium ml-[0px]">
          Welcome back Happy Client
        </h1>
        <form
          className="flex flex-col space-y-[22px]"
          action="/dashboard"
          method="post"
        >
          {/* first name and last name */}
          <div className="flex flex-row space-x-[46px]">
            <div className=" w-[254spx] h-[85px] flex flex-col space-y-[6px] border-b-[2px] border-[#192641]">
              <label
                htmlFor="last_name_id"
                className="text-[#4D525B] text-xl font-normal"
              >
                Last name
              </label>

              <input
                type="text"
                id="last_name_id"
                placeholder="Last name"
                className="text-white bg-[#010714] text-2xl font-normal focus:outline-none"
              />
            </div>
            <div className=" w-[254px] h-[85px] flex flex-col space-y-[6px] border-b-[2px] border-[#192641]">
              <label
                htmlFor="last_name_id"
                className="text-[#4D525B] text-xl font-normal"
              >
                Last name
              </label>

              <input
                type="text"
                id="last_name_id"
                placeholder="Last name"
                className="text-white bg-[#010714] text-2xl font-normal focus:outline-none"
              />
            </div>
          </div>

          {/* phone number */}
          <div className=" w-[556px] h-[85px] flex flex-col space-y-[6px] border-b-[2px] border-[#192641]">
            <label
              htmlFor="phone_number_id"
              className="text-[#4D525B] text-xl font-normal"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phone_number_id"
              placeholder="phone number"
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

          {/* remember me and forgot password */}
          <div className="flex flex-row space-x-[259px] items-center">
            <div className="flex flex-row space-x-[5px] items-center">
              <input
                type="checkbox"
                id="policy_id"
                className="w-[22px] h-[22px]"
              />
              <label
                htmlFor="policy_id"
                className="text-[#4D525B] text-xl font-normal"
              >
                I agree with Term and Privacy Policy
              </label>
            </div>
          </div>

          {/* Login button */}
          <button className="bg-[#101C32] w-[556px] h-[62px] text-2xl font-normal text-[#F9B13C] rounded-xl">
            Create an account
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

          {/* Don't have an account? */}
          <h2 className="text-xl font-normal text-[#808389] pt-[21px]">
            Have you account?{" "}
            <Link href="/user/auth/sign-in" className="text-[#F9B13C]">
              Sign in
            </Link>
          </h2>
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
