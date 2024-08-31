"use client";

function Box({ color }: { color: string }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div
        onClick={(e) => {
          navigator.clipboard.writeText(color);
        }}
        style={{
          background: color,
        }}
        className=" w-32 h-32 rounded-full mt-10 flex items-center justify-center"
      ></div>
      <div>{color}</div>
    </div>
  );
}

export default Box;
