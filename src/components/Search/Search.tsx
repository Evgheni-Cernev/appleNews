import { useSearchParams } from "react-router-dom";
import SearchInput from "../../elements/SearchInput/SearchInput";
import { ChangeEvent } from "react";

const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const onSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const page = searchParams.get("page");
    const value = target.value
    setSearchParams({
      ...(page && { page }),
      ...(value &&({ q: target.value})),
    });
  };

  return (
    <div className="flex self-center">
      <SearchInput value={searchParams.get("q") ?? ''} onSearch={onSearch} />
    </div>
  );
};

export default Search;
