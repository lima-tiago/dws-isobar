import { useEffect } from "react";
import { DashboardTemplate } from "components/templates";
import { Sorting } from "components/organisms";
import { useBands } from "hooks";

import * as Style from "./styles";

export const Home = () => {
  const { getAllBands, filterAndSortBands } = useBands();

  useEffect(() => {
    getAllBands();
  }, [getAllBands]);

  return (
    <DashboardTemplate>
      <Sorting
        count={filterAndSortBands?.length || 0}
        options={[
          { label: "Alphabetically", value: "name" },
          { label: "Popularity", value: "numPlays" },
        ]}
      />
      <div className="container">
        <Style.Wrapper></Style.Wrapper>
      </div>
    </DashboardTemplate>
  );
};
