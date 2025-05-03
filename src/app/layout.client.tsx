"use client";
import Layout from "@/components/layout/layout";
import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";

interface IlayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<IlayoutClientProps> = () => {
  return (
    <ReduxProvider>
      <Layout />
    </ReduxProvider>
  );
};

export default LayoutClient;
