import { SearchInput } from "components/molecules";
import { useBands } from "hooks";

import * as Style from "./styles";
import { Arrowleft } from "assets";
import { useNavigate } from "react-router-dom";

type NavbarProps = {
  internalPage?: boolean;
};

export const Navbar = ({ internalPage = false }: NavbarProps) => {
  const { searchBands, setSearchBands } = useBands();
  const navigate = useNavigate();

  return (
    <Style.Wrapper>
      <div className="container">
        {internalPage ? (
          <Style.ButtonBack onClick={() => navigate(-1)}>
            <img src={Arrowleft} alt="Go Back" />
          </Style.ButtonBack>
        ) : (
          <SearchInput
            placeholder="Search by name..."
            onChange={(value) => setSearchBands(value)}
            value={searchBands}
          />
        )}
        <span>isobar.fm</span>
      </div>
    </Style.Wrapper>
  );
};
