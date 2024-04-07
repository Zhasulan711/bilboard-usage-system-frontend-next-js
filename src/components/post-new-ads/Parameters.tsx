import { ChevronDownParametersIcon } from "@/components/Icons";

export const Parameters = () => {
  const places = [
    { place: "City", district: "Almaty" },
    { place: "District", district: "Almalinsk" },
  ];

  const prices = [
    { item: "All", width: "52px" },
    { item: "105,500", width: "106px" },
    { item: "255,500", width: "108px" },
    { item: "250,000", width: "109px" },
    { item: "310,000", width: "106px" },
    { item: "Custom", width: "99px" },
  ];

  const categories = [
    { item: "All", width: "52px" },
    { item: "Food", width: "75px" },
    { item: "Restaurant", width: "123px" },
    { item: "IT", width: "49px" },
    { item: "Technology", width: "129px" },
    { item: "Course", width: "93px" },
    { item: "Fashion", width: "98px" },
    { item: "Education", width: "117px" },
    { item: "Medicine", width: "117px" },
    { item: "For kids", width: "98px" },
    { item: "Politics", width: "92px" },
    { item: "More", width: "76px" },
  ];

  const times = [
    { item: "All", width: "53px" },
    { item: "1 hour", width: "84px" },
    { item: "2 hour", width: "86px" },
    { item: "3 hour", width: "87px" },
    { item: "6 hour", width: "87px" },
    { item: "12 hour", width: "95px" },
    { item: "1 day", width: "76px" },
    { item: "3 day", width: "79px" },
    { item: "1 week", width: "96px" },
    { item: "2 week", width: "92px" },
    { item: "1 month", width: "94px" },
    { item: "3 month", width: "94px" },
    { item: "6 month", width: "94px" },
    { item: "Custom", width: "99px" },
  ];

  const grps = [
    { item: "All", width: "53px" },
    { item: "200,00", width: "97px" },
    { item: "250,000", width: "109px" },
    { item: "300,000", width: "110px" },
    { item: "400,000", width: "110px" },
    { item: "500,000", width: "110px" },
    { item: "700,000", width: "109px" },
    { item: "1,000,000", width: "123px" },
    { item: "Custom", width: "99px" },
  ];

  const sizes = [{ item: "3.2x3.2" }];

  function Section({ title, items }: any) {
    return (
      <div className="border-t-2 border-[#182235] flex flex-col space-y-[8px] px-[14px] pt-[24px] justify-center mt-[24px]">
        <h3 className="text-lg font-normal text-[#575C65]">{title}</h3>
        <div className="grid grid-cols-3 gap-[12px]">
          {items.map(({ item, width }: any, index: any) => (
            <div
              className="bg-[#070F1B] h-[42px] flex justify-center items-center text-white text-xl font-normal rounded-lg"
              style={{ width: width }}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-[980px] overflow-y-auto w-[451px] scroll-hidden rounded-[14px] bg-[#0F1623]">
      <div className="h-[1266px] py-[12px] px-[26px]">
        {/* Places choose */}
        <h1 className="text-[28px] font-medium text-white">Parameters</h1>
        <div className="border-t-2 border-[#182235] flex flex-row mt-[25px] px-[46px] pt-[24px] space-x-[95px] justify-center">
          {places.map(({ place, district }, index) => (
            <div className="flex flex-col space-y-[4px]" key={index}>
              <h3 className="text-[#575C65] text-lg font-normal">{place}</h3>
              <div className="flex flex-row space-x-[8px] items-center">
                <ChevronDownParametersIcon />
                <h2 className="text-white text-2xl font-normal">{district}</h2>
              </div>
            </div>
          ))}
        </div>

        <Section title="Price" items={prices} />
        <Section title="Category" items={categories} />
        <Section title="Time" items={times} />
        <Section title="Grp" items={grps} />
        <Section title="Size" items={sizes} />
      </div>
    </div>
  );
};
