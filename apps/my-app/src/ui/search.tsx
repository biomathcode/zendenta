import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <form className="flex gap-2 items-center justify-center">
      <label className="relative">
        <span>
          <IoSearch
            size={24}
            className="absolute top-[10px] left-2 text-neutral-300"
          />
        </span>
        <input
          placeholder="Search for anything here..."
          className=" bg-neutral-100 rounded-full px-4 pl-8 py-2 border-2 border-neutral-200 min-w-80  "
        ></input>
      </label>
    </form>
  );
}

export default Search;
