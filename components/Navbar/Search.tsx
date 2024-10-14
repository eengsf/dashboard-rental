import { CiSearch } from 'react-icons/ci';

function Search() {
  return (
    <>
      <div className="xs:flex hidden items-center relative ">
        <input
          id="search"
          type="text"
          placeholder="Search..."
          className=" py-1.5 px-2.5 rounded-md focus:outline-none border border-custom-main3 focus:border-custom-main2 text-sm"
        />
        <CiSearch
          size={20}
          className="absolute right-3 text-custom-main3 cursor-pointer"
        />
      </div>
      <div className="xs:hidden block">
        <CiSearch size={20} className="text-custom-main3 cursor-pointer" />
      </div>
    </>
  );
}

export default Search;
