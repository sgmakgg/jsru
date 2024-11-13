"use client";
import { ThemeDependingButton } from "../themeDependingButton/themeDependingButton.jsx";
import { useParams } from "next/navigation";

export const Tab = ({ id, tabTopic = null }) => {
  const params = useParams();

  const disabledButton = params.id === id && tabTopic === null;

  return (
    <ThemeDependingButton
      topic={tabTopic === null ? name : tabTopic}
      disabled={disabledButton}
      onClick={disabledButton ? null : () => {}}
    />
  );
};
