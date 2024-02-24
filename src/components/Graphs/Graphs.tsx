import {
  ChevronDownAddIcon,
  GraphsIcon,
  GraphsSecondIcon,
} from "@/components/Icons";
import SmallAddInformation from "@/components/SmallAddInformation/SmallAddInformation";
export default function Graphs() {
  const navBars = [
    "Alatau",
    "Almalinsk",
    "Auezov",
    "Bostandyk",
    "Medeu",
    "Nauryzbay",
    "Turksib",
    "Zhetysu",
  ];

  return (
    <div className="bg-[#0F1623] w-[1004px] h-[600px] rounded-lg pl-[15px] pt-[14px] flex flex-col space-y-[3px] relative">
      {/* <div className="flex flex-col w-[1004px]"> */}
      <div className="flex flex-row space-x-[336px] items-center">
        <h1 className="text-white text-[28px] font-medium">
          Graphs spend for the period
        </h1>
        <div className="flex flex-row text-center">
          <h2 className="text-[#575C65] text-xl font-normal">
            Last 7 days, <span className="text-white">26 Aug - 01 Sep.</span>
          </h2>
          <ChevronDownAddIcon />
        </div>
      </div>
      <h3 className="text-sm font-normal text-[#575C65]">
        You can only select 3 regions
      </h3>

      <div className="flex flex-row space-x-[10px]">
        {navBars.map((items, index) => (
          <div
            className="bg-[#070F1B] w-[113px] h-9 text-xl font-normal text-white flex justify-center items-center"
            key={index}
          >
            {" "}
            {items}{" "}
          </div>
        ))}
      </div>

      <div className="flex inset-0 top-[170px] -left-[15px] absolute">
        <GraphsIcon />
      </div>
      <div className="flex inset-0 top-[270px] left-[25px] absolute">
        <GraphsSecondIcon />
      </div>
    </div>
  );
}
