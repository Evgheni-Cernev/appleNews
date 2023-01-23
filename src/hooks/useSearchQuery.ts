import { useDebouncedValue } from "@mantine/hooks";
import { useMemo } from "react";
import { CompanyNewsResponse } from "../redux/api/apiNews/types";
import { useSearchParams } from "react-router-dom";

const useQuery = (filteredData: CompanyNewsResponse[]) => {
  let [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  const [debouncedQuery] = useDebouncedValue(query, 350);

  const resultData = useMemo(() => {
    let searchQuery = debouncedQuery.toLowerCase().trim();

    if (searchQuery === "") return filteredData;

    const searchList = filteredData.filter((item) => {
      if (item.summary) {
        return item.summary.includes(searchQuery)
      }
      if (item.headline) {
        return item.headline.includes(searchQuery)
      }
      return false;
    });

    return searchList;
  }, [filteredData, debouncedQuery]);


  return {
    query,
    resultData,
  };
};

export default useQuery;