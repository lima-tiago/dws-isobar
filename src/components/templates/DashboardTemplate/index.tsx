import { ReactNode } from "react";
import { Navbar } from "components/organisms";
import * as Style from "./styles";
import { useBands } from "hooks";

type DashboardTemplateProps = {
  internalPage?: boolean;
  children: ReactNode;
};

export const DashboardTemplate = ({
  internalPage = false,
  children,
}: DashboardTemplateProps) => {
  const { bands } = useBands();

  return (
    <Style.Wrapper>
      <Navbar internalPage={internalPage} />
      {bands?.length ? children : null}
    </Style.Wrapper>
  );
};
