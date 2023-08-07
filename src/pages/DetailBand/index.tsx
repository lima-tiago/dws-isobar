import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardTemplate } from "components/templates";
import { useBands } from "hooks";
import { Albums, Bands } from "types";

import * as Style from "./styles";

export const DetailBand = () => {
  const { bandId } = useParams();
  const { getBandById, bands, getAllBands } = useBands();
  const [band, setBand] = useState<Bands>();
  const [albums, setAlbums] = useState<Albums[]>();

  const getAlbums = useCallback(async () => {
    if (band?.albums && band?.albums.length > 0) {
      const albumsFetched: Albums[] = await Promise.all(
        band.albums.map(async (album) => {
          const res = await fetch(
            `${process.env.REACT_APP_API_URL}/albums/${album}`
          );
          const data = await res.json();
          return data;
        })
      );

      if (albumsFetched) setAlbums(albumsFetched);
    }
  }, [band?.albums]);

  useEffect(() => {
    if (bandId) {
      if (!bands) {
        getAllBands();
        return;
      }
      const bandSelected = getBandById(bandId);
      if (bandSelected) setBand(bandSelected);
    }
  }, [bandId, bands, getAllBands, getBandById]);

  useEffect(() => {
    if (band && band?.albums.length > 0) {
      getAlbums();
    }
  }, [band, getAlbums]);

  return (
    <DashboardTemplate internalPage>
      <Style.Cover>
        <img
          src={band?.image}
          alt={`Cover from ${band?.name}`}
          width="100%"
          height={300}
        />
      </Style.Cover>
      <Style.Wrapper>
        <div className="container">
          <Style.Title>
            <span>{band?.genre}</span>
            <div>
              <h1>{band?.name}</h1>
              <img
                src={band?.image}
                alt={`Cover from ${band?.name}`}
                width={80}
                height={80}
              />
            </div>
            <span>
              {band?.numPlays?.toLocaleString("en-US", {
                maximumFractionDigits: 3,
                notation: "compact",
                compactDisplay: "short",
              })}{" "}
              plays
            </span>
          </Style.Title>

          <Style.Biography
            dangerouslySetInnerHTML={{ __html: band?.biography || "" }}
          />

          <Style.Albums>
            <h1>ALBUMS</h1>
            <div>
              {albums?.map((album) => (
                <img src={album.image} alt={album.name} key={album.id} />
              ))}
            </div>
          </Style.Albums>
        </div>
      </Style.Wrapper>
    </DashboardTemplate>
  );
};
