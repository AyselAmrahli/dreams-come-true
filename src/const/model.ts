import { FC, ReactElement, ReactNode } from "react";

export interface IAppMenuList {
  text: string;
  route: string;
}

export interface IAppRoute {
  path: string;
  Component: FC;
}

export interface IActionType {
  type: string;
  payload?: any;
}