import React from "react";
import { PageType } from "../lib/ghost/pages";

export interface BasicLayoutProps {
  navPages: PageType[];
  categoryPages: PageType[];
  contentContainerClass?: string;
  renderSidebar?: boolean;
  children?: React.ReactNode;
}