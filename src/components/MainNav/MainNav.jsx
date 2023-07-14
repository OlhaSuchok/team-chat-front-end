import * as React from "react";
import {
  MainNavList,
  MainNavItem,
  MainNavigationNavLink,
} from "./MainNav.styled";

export const MainNav = () => {
  return (
    <MainNavList>
      <MainNavItem>
        <MainNavigationNavLink to="/home">Home</MainNavigationNavLink>
      </MainNavItem>
    </MainNavList>
  );
};
