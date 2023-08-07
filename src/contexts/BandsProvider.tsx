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
  bands?: Bands[];
  filterAndSortBands?: Bands[];
  getAllBands: () => void;
  searchBands: string;
  setSearchBands: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
  getBandById: (id: string) => Bands | undefined;
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
    const response = fetch(`${process.env.REACT_APP_API_URL}/bands`).then(
      async (res) => {
        const data = await res.json();
        setBands(data);
        return data;
      }
    );
    return response;
  }, []);

  const getBandById = useCallback(
    (id: string) => {
      const bandSelected = bands?.find((band) => band.id === id);
      return bandSelected;
    },
    [bands]
  );

  const bandsProviderData = useMemo(() => {
    return {
      bands,
      filterAndSortBands,
      getAllBands,
      searchBands,
      setSearchBands,
      sortBy,
      setSortBy,
      getBandById,
    };
  }, [
    bands,
    filterAndSortBands,
    getAllBands,
    getBandById,
    searchBands,
    sortBy,
  ]);

  return (
    <BandsContext.Provider value={bandsProviderData}>
      {children}
    </BandsContext.Provider>
  );
};
