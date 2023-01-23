import { useSearchParams } from "react-router-dom";

const useGoToPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const q = searchParams.get("q");

  const goToPage = (goTo: string) => {
    if(goTo === 'next'){
      setSearchParams({
        page: String(page + 1),
        ...(q && { q }),
      });
    }

    if(goTo === 'previous'){
      setSearchParams({
        page: String(page - 1),
        ...(q && { q }),
      });
    }
  };

  return {page, goToPage}
};

export default useGoToPage;