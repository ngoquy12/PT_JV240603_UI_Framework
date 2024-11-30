import React from "react";

export default function DemoTailwind() {
  return (
    <div>
      <h3 className="text-[35px]">Demo về font-size</h3>
      <h3 className="text-[red]">Demo màu chữ</h3>
      <h3 className="text-center">Demo về căn chữ</h3>
      <h3 className="font-bold">Demo về độ đậm văn bản</h3>

      <p>----- Flex box & box modal-----</p>
      <div className="bg-green-400 flex h-[200px] w-[80%] gap-4">
        <div className="bg-red-500 flex-1 px-[32px] py-[48px]">Box 1</div>
        <div className="bg-red-500 flex-1 pt-[12px] pr-[24px] pb-[48px] pl-[56px]">
          2
        </div>
        <div className="bg-red-500 flex-1 my-5">3</div>
      </div>

      <p>----- Grid system-----</p>
      <div className="grid sm:grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        <div className="bg-red-400">1</div>
        <div className="bg-red-400">2</div>
        <div className="bg-red-400">3</div>
        <div className="bg-red-400">4</div>
        <div className="bg-red-400">5</div>
        <div className="bg-red-400">6</div>
      </div>

      {/* Animation */}
      <div className="mt-4 text-center flex justify-center">
        <div className="h-14 w-14 border-[5px] rounded-full border-r-transparent animate-spin"></div>
      </div>
    </div>
  );
}

// Thiết bị: mobile, tablet, PC
