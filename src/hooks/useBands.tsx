import { useContext } from "react";
import { BandsContext, BandsContextData } from "contexts/BandsProvider";

export function useBands(): BandsContextData {
  const context = useContext(BandsContext);

  if (!context) {
    throw new Error("useBands must be uses within a BandsProvider");
  }

  return context;
}
