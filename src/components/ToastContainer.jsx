import "./ToastContainer.css";

export function ToastContainer({ classPosition, children }) {
  return <div className={`container ${classPosition}`}>{children}</div>;
}
