import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Bands } from "types";

export type BandsContextData = {
  filterAndSortBands?: Bands[];
  getAllBands: () => void;
  searchBands: string;
  setSearchBands: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

type BandsProviderProps = {
  children: ReactNode;
};

export const BandsContext = createContext<BandsContextData>(
  {} as BandsContextData
);

export const BandsProvider = ({ children }: BandsProviderProps) => {
  const [bands, setBands] = useState<Bands[]>();
  const [searchBands, setSearchBands] = useState("");
  const [sortBy, setSortBy] = useState<string>("name");
  const filterAndSortBands = useMemo(() => {
    const bandsFiltered = bands?.filter((band) =>
      band.name.toLowerCase().includes(searchBands.toLowerCase())
    );

    if (sortBy === "name") {
      bandsFiltered?.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "numPlays") {
      bandsFiltered?.sort((a, b) => b.numPlays - a.numPlays);
    }

    return bandsFiltered;
  }, [bands, searchBands, sortBy]);

  const getAllBands = useCallback(() => {
    const response = fetch(process.env.REACT_APP_API_URL as string).then(
      async (res) => {
        const data = await res.json();
        setBands(data);
        return data;
      }
    );
    return response;
  }, []);

  const bandsProviderData = useMemo(() => {
    return {
      filterAndSortBands,
      getAllBands,
      searchBands,
      setSearchBands,
      sortBy,
      setSortBy,
    };
  }, [filterAndSortBands, getAllBands, searchBands, sortBy]);

  return (
    <BandsContext.Provider value={bandsProviderData}>
      {children}
    </BandsContext.Provider>
  );
};
