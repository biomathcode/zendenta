"use client";

function Box({ color }: { color: string }) {
  return (
    <div
      onClick={(e) => {
        navigator.clipboard.writeText(color);
      }}
      style={{
        background: color,
      }}
      className=" w-32 h-32 rounded-full mt-10 flex items-center justify-center"
    >
      {color}
    </div>
  );
}

export default Box;
