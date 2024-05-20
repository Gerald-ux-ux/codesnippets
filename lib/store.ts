import { create } from "zustand";

export type Filter = {
  selectedLanguage: string;
  selectedSort: string;
};

export const useFiltersStore = create((set) => ({
  filter: {
    selectedLanguage: "",
    selectedSort: "",
  },
  setFilter: (newFilter: Partial<Filter>) =>
    set((state: any) => ({
      filter: { ...state.filter, ...newFilter },
    })),
}));
