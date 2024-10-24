"use client";

import dynamic from "next/dynamic";

export const AppComponent = dynamic(() => import("../../app"), {
  ssr: false,
});

export const App = () => {
  return <AppComponent />;
};
