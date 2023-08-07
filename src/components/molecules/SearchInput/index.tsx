import { Input } from "components/atoms";
import { SearchIcon } from "assets";

import * as Style from "./styles";

type SearchInputProps = {
  placeholder?: string;
  onSubmit: () => void;
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({
  placeholder,
  onSubmit,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <Style.Wrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSubmit}>
        <img src={SearchIcon} alt="Search" width={18} height={18} />
      </button>
    </Style.Wrapper>
  );
};
