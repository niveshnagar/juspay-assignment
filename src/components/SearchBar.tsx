import { Search } from "lucide-react";

const SearchBar = () => {
    return (
      <div className="flex flex-rows items-center min-w-0 w-full max-w-[160px] px-2 py-1 leading-5 bg-white bg-opacity-20 rounded-lg text-white text-opacity-20">
        <Search className="w-4 h-4 mr-1" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 bg-transparent text-white text-opacity-20 placeholder:text-white placeholder:text-opacity-20 focus:outline-none min-w-0"
        />
        <span className="ml-2 text-sm">⌘ /</span>
      </div>
    );
  };
  
export default SearchBar;
