import { Search } from "lucide-react";

const SearchBar = () => {
    return (
      <div className="bg-[#1C1C1C0D] text-[#1C1C1C33] dark:bg-white dark:bg-opacity-20 dark:text-white dark:text-opacity-20    flex flex-rows items-center min-w-0 w-full max-w-[160px] px-2 py-1 leading-5 rounded-lg ">
        <Search className="w-4 h-4 mr-1" />
        <input
          type="text"
          placeholder="Search"
          className="text-[#1C1C1C33] placeholder:text-[#1C1C1C33]   dark:text-white dark:text-opacity-20  dark:placeholder:text-white dark:placeholder:text-opacity-20    flex-1 bg-transparent focus:outline-none min-w-0"
        />
        <span className="ml-2 text-sm">⌘ /</span>
      </div>
    );
  };
  
export default SearchBar;
