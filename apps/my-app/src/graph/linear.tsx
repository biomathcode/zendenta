interface LinearGraphData {
  label: string;
  value: number;
  color: string;
}

const sampledata = [
  {
    label: "In stock",
    value: 20,
    color: "#17cccc",
  },
  {
    label: "Low stock",
    value: 4,
    color: "#F4A23A",
  },
  {
    label: "Out of stock",
    value: 8,
    color: "#E37171",
  },
];

function LinearGraph({ data = sampledata }: { data?: LinearGraphData[] }) {
  let maxWidth = 300;

  let total = data.reduce((x, y) => {
    return x + y.value;
  }, 0);

  console.log(total);

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-2  items-baseline">
        <div className=" font-bold text-xl align-baseline">{total}</div>{" "}
        <div>products</div>
      </div>
      <div className="flex gap-1 w-full">
        {data.map((e) => {
          return (
            <div
              key={e.label}
              style={{
                background: e.color,
                width: ((e.value / total) * 400).toString() + "px",
                height: "10px",
                borderRadius: "3px",
              }}
            ></div>
          );
        })}
      </div>
      <div className="flex gap-8">
        {data.map((e) => {
          return (
            <div className="flex gap-2  items-center " key={e.label}>
              <div className="flex gap-2 items-center">
                <div
                  className=" rounded-full "
                  style={{ background: e.color, width: "8px", height: "8px" }}
                ></div>
                <div className=" text-neutral-500 font-medium">
                  {e.label + ": "}
                </div>
              </div>

              <div>{e.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LinearGraph;
