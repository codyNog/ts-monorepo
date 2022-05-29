import { KeyboardEvent } from "react";

export const onPreseEnter = (e: KeyboardEvent, func: () => void) => {
  if (e.key !== "enter") return;
  func();
};
