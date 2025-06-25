import { useMemo } from "react";

interface SearchableItem {
  name: string;
  species: string;
  category: string;
}

export function useFilteredData<T extends SearchableItem>(
  data: T[] | null,
  searchTerm: string,
  selectedCategory: string
): T[] {
  return useMemo(() => {
    if (!data) return [];

    return data.filter((d: T) => {
      const matchesSearch =
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.species.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || d.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [data, searchTerm, selectedCategory]);
}
