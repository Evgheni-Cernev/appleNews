import NewsCard from "../../elements/NewsCard/NewsCard";
import { NewsCardsType } from "./types";
import { CompanyNewsResponse } from "../../redux/api/apiNews/types";

const NewsCards = <T extends CompanyNewsResponse>({
  data,
}: NewsCardsType<T>) => {
  return (
  <div className="flex flex-wrap box-content mb-[6px]">
    {data.map((news) => (
      <div
        key={news.id}
        className="w-[280px] h-[425px] nth-[3n]:mr-[18px] mb-[18px] grow"
      >
        <NewsCard news={news} />
      </div>
    ))}
  </div>
)};

export default NewsCards;
