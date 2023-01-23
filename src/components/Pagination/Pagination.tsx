import { PaginationProps } from "./types";

const Pagination = ({
  start_item,
  end_item,
  counter,
  goToPage,
}: PaginationProps) => {
  const showPrevious = start_item > 1;
  const showNext = start_item < end_item;

  return (
    <div className="flex justify-between text-[10px]">
      <div className="self-center">
        <span className="mr-[7px] self-center">{`${start_item}-${end_item}`}</span>

        <span className="opacity-25 self-center">{`out of ${counter}`}</span>
      </div>

      <div className="flex">
        {showPrevious ? (
          <div
            onClick={() => goToPage("previous")}
            className="px-[32px] py-[7px] rounded-full bg-[#3C3C3C] mr-[10px]"
          >
            PREVIOUS
          </div>
        ) : null}
        {showNext ? (
          <div
            onClick={() => goToPage("next")}
            className="px-[32px] py-[7px] rounded-full bg-[#3C3C3C]"
          >
            NEXT
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Pagination;
