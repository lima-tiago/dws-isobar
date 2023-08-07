import { useState } from "react";
import { SearchInput } from "components/molecules";

import * as Style from "./styles";

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    console.log(searchValue);
  };

  return (
    <Style.Wrapper>
      <div className="container">
        <SearchInput
          placeholder="Search by name..."
          onSubmit={handleSearch}
          onChange={(value) => setSearchValue(value)}
          value={searchValue}
        />
        <span>isobar.fm</span>
      </div>
    </Style.Wrapper>
  );
};
