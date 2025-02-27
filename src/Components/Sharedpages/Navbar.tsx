import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router";
const SearchBar: React.FC = () => {
  return (
    <div className="px-5  py-12">
      <div className="flex justify-between items-center p-5 rounded-3xl shadow-md shadow-gray-400 bg-[#ECEDEE]">
        <div className="relative w-76 font-semibold">
          <input
            type="text"
            className="w-full h-11 pl-10 pr-4 rounded-full  bg-[#ffffff] shadow-md shadow-gray-400 border-white focus:outline-none"
            placeholder="Search Project"
          />
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 font-semibold  text-xl text-black" />
        </div>
        <div className="flex items-center">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-white rounded-md border-2 text-lg text-gray-500 flex items-center gap-2 border-gray-400"
            >
              <CiFilter className=""></CiFilter> Filter <IoIosArrowDown className="text-gray-400"></IoIosArrowDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
