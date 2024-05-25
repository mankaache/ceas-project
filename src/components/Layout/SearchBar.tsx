import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { words } from '@/lib/data'
// Remember to import words or whatever you're using to store all the words the user can search for

const SearchBar = () => {
  const [activeSearch, setActiveSearch] = useState([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }
    // setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0,8))
  };

  return (
    <form className="w-full px-1 md:w-[35%] relative md:-flex">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full px-4 py-3 focus:border-none rounded-full bg-white border border-gray-700"
          onChange={(e) => handleSearch(e)}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-gray-400 text-white font-semibold rounded-full">
          <AiOutlineSearch />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((s, id) => (
            <span key={id}>{s}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
