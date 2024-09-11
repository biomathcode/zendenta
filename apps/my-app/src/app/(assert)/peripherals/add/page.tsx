import Spacer from "@/ui/spacer";
import Image from "next/image";

function AddPeripherals() {
  return (
    <div className="flex justify-center items-center min-w-full  ">
      <main className="flex w-full h-full">
        <div className="flex flex-col gap-2 w-full h-full px-10">
          <Spacer direction="vertical" size="medium" />
          <div className="flex w-full justify-between">
            <h1>New Peripherals</h1>
            <div className="flex gap-2">
              <button>Cancel</button>
              <button className=" px-4 py-2 bg-zinc-500 rounded font-bold text-neutral-50 text-sm">
                Save
              </button>
            </div>
          </div>
          <Spacer direction="vertical" size="medium" />

          <div className="flex gap-10 h-full ">
            <div className="flex flex-col gap-4 max-w-">
              <div className=" h-60 w-60 bg-neutral-300 rounded flex flex-col justify-center shadow-lg">
                <Image
                  src=""
                  alt="Add Placeholder Image"
                  width={40}
                  height={40}
                />
                <label>Upload Photo</label>
              </div>
              <div className="flex flex-col gap-1">
                <label>Assign to</label>
                <input placeholder="Select Assign" />
              </div>
              <div className="flex flex-col gap-1">
                <label>Tags</label>
                <input placeholder="Select Assign" />
              </div>
              <div className="flex flex-col gap-1">
                <label>Status</label>
                <select>
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>
            <div className=" border border-neutral-100 w-full p-4 rounded shadow-lg h-full">
              <h2>Product Details</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddPeripherals;
