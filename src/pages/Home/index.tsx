import { useEffect } from "react";
import { DashboardTemplate } from "components/templates";
import { Sorting } from "components/organisms";
import { useBands } from "hooks";

import * as Style from "./styles";
import { Link } from "react-router-dom";

export const Home = () => {
  const { getAllBands, filterAndSortBands } = useBands();

  useEffect(() => {
    getAllBands();
  }, [getAllBands]);

  return (
    <DashboardTemplate>
      {filterAndSortBands?.length ? (
        <>
          <Sorting
            count={filterAndSortBands?.length || 0}
            options={[
              { label: "Alphabetically", value: "name" },
              { label: "Popularity", value: "numPlays" },
            ]}
          />
          <div className="container">
            <Style.Wrapper>
              {filterAndSortBands?.map((band) => (
                <Style.BandItem key={band.id}>
                  <img
                    src={band.image}
                    alt={`Album ${band.name}`}
                    width={50}
                    height={50}
                  />
                  <Link to={`/${band.id}`}>
                    <p>{band.name}</p>
                    <span>{band.numPlays.toLocaleString("en-US")} plays</span>
                  </Link>
                </Style.BandItem>
              ))}
            </Style.Wrapper>
          </div>
        </>
      ) : null}
    </DashboardTemplate>
  );
};
