import { useContext, useEffect, useRef, useState } from "react";
import "./Toast.css";
import { ToastContext } from "../App";

export function createToastId() {
  const toastId = crypto.randomUUID();
  return toastId;
}

export function Toast({ position, duration, id, children }) {
  const [toastBox, setToastBox] = useContext(ToastContext);

  useEffect(() => {
    const time = parseInt(duration);
    const timeoutId = setTimeout(() => {
      removeToast();
    }, time);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  function removeToast() {
    setToastBox((prevToastBox) => {
      return prevToastBox.filter((data) => data.id !== id);
    });
  }

  return (
    <div onClick={removeToast} className={`toast ${position}`}>
      {children}
    </div>
  );
}
