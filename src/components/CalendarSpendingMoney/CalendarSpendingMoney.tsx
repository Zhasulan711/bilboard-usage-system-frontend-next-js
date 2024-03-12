const ColorCircle = ({ color, text }: { color: string; text: string }) => (
  <div className="flex flex-row items-center space-x-[5px]">
    <div className={`w-2 h-2 bg-color-${color} rounded-full`}></div>
    <h3 className="text-white text-xl font-normal">{text}</h3>
  </div>
);

const colorData = [
  { color: "midnightCircle", text: "0" },
  { color: "denimCircle", text: "200k-300k" },
  { color: "cobaltCircle", text: "300k-500k" },
  { color: "blueCircle", text: "500k-800k" },
  { color: "oceanCircle", text: "Above 800k" },
];

const chunk = (array: any[], size: number) => {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
};

const colorDataChunks = chunk(colorData, 2);

export default function CalendarSpendingMoney() {
  return (
    <div className="flex flex-col space-y-[10px] mt-[20px]">
      {colorDataChunks.map((chunk, index) => (
        <div key={index} className="flex flex-row space-x-[30px]">
          {chunk.map((item, index) => (
            <ColorCircle key={index} color={item.color} text={item.text} />
          ))}
        </div>
      ))}
    </div>
  );
}
