import { SortIcon } from "assets";

import * as Style from "./styles";
import { useState } from "react";
import { useBands } from "hooks";

type SortingProps = {
  count: number;
  options: {
    label: string;
    value: string;
  }[];
};

export const Sorting = ({ count, options }: SortingProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const { setSortBy } = useBands();

  return (
    <Style.Wrapper>
      <div className="container">
        <span>{count} results</span>
        <button type="button" onClick={() => setShowOptions(!showOptions)}>
          <img src={SortIcon} alt="Sort by" width={18} height={18} />
          {showOptions ? (
            <Style.Options>
              {options.map((option) => (
                <span
                  onClick={() => setSortBy(option.value)}
                  key={option.value}
                >
                  {option.label}
                </span>
              ))}
            </Style.Options>
          ) : null}
        </button>
      </div>
    </Style.Wrapper>
  );
};
