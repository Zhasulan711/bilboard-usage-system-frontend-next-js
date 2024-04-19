"use client";

import { ChevronDownParametersIcon } from "@/components/Icons";
import { useEffect, useState } from "react";

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

export const Parameters = () => {
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [selectedGrp, setSelectedGrp] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);

  function Section({
    title,
    items,
    selected,
    setSelected,
  }: any) {
    return (
      <div className="border-t-2 border-[#D9D9D9] dark:border-[#182235] flex flex-col space-y-[8px] px-[14px] pt-[24px] justify-center mt-[24px]">
        <h3 className="text-lg font-normal text-[#D9D9D9] dark:text-[#575C65]">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-[12px]">
          {items.map(({ item, width }: any, index: any) => {
            const isClicked = selected.includes(index);
            return (
              <div
                className={`bg-[#D9D9D9] dark:bg-[#070F1B] h-[42px] flex justify-center items-center text-black dark:text-white text-xl font-normal rounded-lg
                ${
                  isClicked
                    ? "bg-[#F99802] dark:bg-[#F99802]"
                    : "bg-[#D9D9D9] dark:bg-[#070F1B]] "
                } `}
                style={{ width: width }}
                key={index}
                onClick={() => {
                  const newSelectedIndexes = [...selected];
                  const idx = newSelectedIndexes.indexOf(index);
                  if (idx > -1) {
                    newSelectedIndexes.splice(idx, 1);
                  } else if (newSelectedIndexes.length < 3) {
                    newSelectedIndexes.push(index);
                  }
                  setSelected(newSelectedIndexes);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="h-[980px] overflow-y-auto w-[321px] scroll-hidden rounded-[14px] bg-white dark:bg-[#0F1623]">
      <div className="h-[1266px] py-[12px] px-[26px]">
        {/* Places choose */}
        <h1 className="text-[28px] font-medium text-white">Parameters</h1>
        <div className="border-t-2 border-[#D9D9D9] dark:border-[#182235] flex flex-row mt-[25px] px-[46px] pt-[24px] space-x-[48px] justify-center">
          {places.map(({ place, district }, index) => (
            <div className="flex flex-col space-y-[4px]" key={index}>
              <h3 className="text-[#D9D9D9] dark:text-[#575C65] text-lg font-normal">
                {place}
              </h3>
              <div className="flex flex-row space-x-[8px] items-center">
                <ChevronDownParametersIcon />
                <h2 className="text-black dark:text-white text-2xl font-normal">
                  {district}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <Section
          title="Price"
          items={prices}
          selected={selectedPrice}
          setSelected={setSelectedPrice}
        />
        <Section
          title="Category"
          items={categories}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
        <Section
          title="Time"
          items={times}
          selected={selectedTime}
          setSelected={setSelectedTime}
        />
        <Section
          title="Grp"
          items={grps}
          selected={selectedGrp}
          setSelected={setSelectedGrp}
        />
        <Section
          title="Size"
          items={sizes}
          selected={selectedSize}
          setSelected={setSelectedSize}
        />
      </div>
    </div>
  );
};
