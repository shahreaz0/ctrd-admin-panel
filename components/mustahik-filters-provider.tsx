"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type MustahikFilters = {
  page: number;
  pageSize: number;
  Condition: number[] | [];
  Status: number[] | [];
  Gender: number[] | [];
  Program: number[] | [];
  searchName: string;
};

type Context = {
  mustahikFilters: MustahikFilters;
  setMustahikFilters: Dispatch<SetStateAction<MustahikFilters>>;
};

const mustahikFiltersContext = createContext<Context>({
  mustahikFilters: {
    Condition: [],
    Gender: [],
    Program: [],
    Status: [],
    pageSize: 20,
    page: 1,
    searchName: "",
  },
  setMustahikFilters: () => {},
});

type Props = {
  children: ReactNode;
};

export function useMustahikFilters() {
  return useContext(mustahikFiltersContext);
}

export function MustahikFiltersProvider(props: Props) {
  const [mustahikState, setMustahikState] = useState<MustahikFilters>({
    Condition: [],
    Gender: [],
    Program: [],
    Status: [],
    pageSize: 10,
    page: 1,
    searchName: "",
  });

  return (
    <mustahikFiltersContext.Provider
      value={{
        mustahikFilters: mustahikState,
        setMustahikFilters: setMustahikState,
      }}
    >
      {props.children}
    </mustahikFiltersContext.Provider>
  );
}
