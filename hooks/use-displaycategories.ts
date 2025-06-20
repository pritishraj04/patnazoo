import { useMemo } from "react";


interface CategoryItem {
  category: string;
}

export const useDisplayCategories = <T extends CategoryItem>(data: T[] | null) => {
  const categories = useMemo(() => {
    if (!data) return ["all"];

    const uniqueCategories = Array.from(
      new Set(data.map((item) => item.category))
    ).filter(Boolean);

    return ["all", ...uniqueCategories];
  }, [data]);

  return categories;
};
