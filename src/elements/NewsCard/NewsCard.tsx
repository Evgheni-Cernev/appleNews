import Bookmarks from "../../images/Icons/Bookmarks";
import BookmarkMarked from "../../images/Icons/BookmarkMarked";
import RoundedArrowIcon from "../../images/Icons/RoundedArrowIcon";
import { useDispatch } from "react-redux";
import { LATEST_RESEARCH } from "../../constants";
import { NewsCardType } from "./types";
import { setBookmark } from "../../redux/slices/companyNewsSlice";

const NewsCard = ({
  news,
  showLatest = false,
  research = false,
}: NewsCardType) => {
  const dispatch = useDispatch();
  const day = new Date(news.datetime).toLocaleString("default", {
    day: "numeric",
    month: "short",
  });

  return (
    <div
      className="bg-cover bg-center bg-gray-300 p-4 h-full rounded-lg p-25 flex flex-col justify-between"
      style={{ backgroundImage: `url(${news.image})` }}
    >
      <div className="flex justify-between">
        <span className="text-[10px] leading-3 px-[20px] py-[5px] rounded-full border border-white">
          {news.related}
        </span>
        {showLatest && (
          <span className="text-[8px] leading-[8px] py-[6px] px-[4px] bg-[#B73556] h-fit self-center">
            {LATEST_RESEARCH.toLocaleUpperCase()}
          </span>
        )}
      </div>
      <div>
        <a
          className="flex flex-col"
          href={news.url}
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-[20px] line-clamp-3 leading-7 font-medium">
            {news.headline}
          </span>
          <span className="text-[16px] line-clamp-3 opacity-[0.8] leading-7 font-medium">
            {news.summary}
          </span>
        </a>

        <div className="flex justify-between">
          <div className="flex">
            {research && (
              <div className="flex after:content-[''] after:bg-[#fff] after:opacity-[0.1] after:h-full after:w-[1px] after:mx-[17px]">
                <RoundedArrowIcon className="mr-[12px] self-center" />
                <span className="text-[12px] leading-3 self-center">
                  Read the research
                </span>
              </div>
            )}
            <p className="text-[12px] leading-3 self-center text-gray-600 text-left">
              {day}
            </p>
          </div>
          <div
            className="w-[12px] h-[13px]"
            onClick={() =>
              dispatch(
                setBookmark({
                  newsId: Number(news.id),
                  isBookmarked: !news.bookmark,
                })
              )
            }
          >
            {news.bookmark ? (
              <BookmarkMarked className="self-center" />
            ) : (
              <Bookmarks className="self-center" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
