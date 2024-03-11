import Link from "next/link";
import { PlusIcon } from "../Icons/PlusIcon";

export default function PostNewAds() {
    return (
        <Link
        href="/post-add"
        className="w-[277px] h-[216px] bg-[#040C19] border border-transparent rounded-[18px] mt-[68px] 
          flex flex-col space-y-[15px] justify-center items-center text-center"
      >
        <div className="rounded-full w-[60px] h-[60px] bg-[#1A2843] flex justify-center items-center">
          <PlusIcon />
        </div>
        <section className="flex flex-col space-y-[6px]">
          <h1 className="text-white text-3xl font-normal">Post New Ads</h1>
          <p className="text-[#454B57] text-base font-normal">
            When placing new 24 ads, <br />{" "}
            <span className="text-[#F99801]">discount 10%</span>
          </p>
        </section>
      </Link>
    )
}