import { ChangeEvent } from "react";
import SearchIcon from "../../images/Icons/SearchIcon";

const SearchInput = ({
  onSearch,
  value,
}: {
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => (
  <div className="flex items-center relative">
    <input
      className="bg-[#191818] text-sm font-medium rounded-[2px] w-[162px] px-[30px] py-[8px]"
      type="text"
      value={value}
      onChange={onSearch}
    />
    <div className="absolute left-[10px]">
      <SearchIcon />
    </div>
  </div>
);

export default SearchInput;
