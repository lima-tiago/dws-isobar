import { ReactNode } from "react";
import { Navbar } from "components/organisms";
import * as Style from "./styles";

type DashboardTemplateProps = {
  internalPage?: boolean;
  children: ReactNode;
};

export const DashboardTemplate = ({
  internalPage = false,
  children,
}: DashboardTemplateProps) => {
  return (
    <Style.Wrapper>
      <Navbar internalPage={internalPage} />
      {children}
    </Style.Wrapper>
  );
};
