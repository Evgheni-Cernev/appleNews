import uniq from "lodash/uniq";

export const setLocalstorageData = (key: string, data: number[]) => {
  window.localStorage.setItem(key, JSON.stringify(uniq(data)));
};
