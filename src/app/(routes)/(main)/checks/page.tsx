export default function ChecksPage() {
  return (
    <div>
      <div className="w-[444px] h-[384px] bg-white dark:bg-[#0F1623] flex flex-col space-y-[5px] pl-[16px] pt-[2px] rounded">
        <div className="flex flex-col space-y-[12px]">
          <h1 className="text-white text-[32px] font-normal">Order #42534</h1>
          <div className="flex flex-col space-y-[10px] text-black dark:text-white text-xl font-normal">
            <h2>
              <span className="text-zinc-500">Sum: </span>435 353 546
            </h2>
            <h2>
              <span className="text-zinc-500">Quantity: </span> 4
            </h2>
            <h2>
              <span className="text-zinc-500">Paid for: </span> Kaspi Bank
            </h2>
          </div>
        </div>

        <div className="flex flex-col space-y-[12px]">
          <h1 className="text-white text-[32px] font-normal">Billboards</h1>
          <div className="flex flex-col space-y-[10px] text-xl font-normal">
            <h2>1. Abaya - Muratbayeva</h2>
            <h2>2. Abaya - Muratbayeva</h2>
            <h2>3. Abaya - Muratbayeva</h2>
            <h2>4. Abaya - Muratbayeva</h2>
          </div>
        </div>
      </div>
     
    </div>
  );
}
