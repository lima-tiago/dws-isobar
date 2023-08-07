import { SearchInput } from "components/molecules";
import { useBands } from "hooks";

import * as Style from "./styles";

export const Navbar = () => {
  const { searchBands, setSearchBands } = useBands();

  return (
    <Style.Wrapper>
      <div className="container">
        <SearchInput
          placeholder="Search by name..."
          onChange={(value) => setSearchBands(value)}
          value={searchBands}
        />
        <span>isobar.fm</span>
      </div>
    </Style.Wrapper>
  );
};
