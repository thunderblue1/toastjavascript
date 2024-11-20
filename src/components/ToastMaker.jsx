import { useContext } from "react";
import "./ToastMaker.css";
import { ToastContext } from "../App";
import { createToastId } from "./Toast";

export function ToastMaker() {
  const [toastBox, setToast] = useContext(ToastContext);

  function makeToast(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    data["id"] = createToastId();

    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    setToast([...toastBox, data]);
  }

  return (
    <div className={`toast-maker`}>
      <form onSubmit={makeToast}>
        <label htmlFor="message">Message:</label>
        <br />
        <input id="message" name="message" type="text"></input>
        <br />
        <label htmlFor="position">Position:</label>
        <br />
        <select id="position" name="position">
          <option value="middle">Middle</option>
          <option value="top-left">Top Left</option>
          <option value="top-middle">Top Middle</option>
          <option value="top-right">Top Right</option>

          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-middle">Bottom Middle</option>
          <option value="bottom-right">Bottom right</option>
        </select>
        <br />
        <label htmlFor="message">Duration:</label>
        <br />
        <select id="duration" name="duration">
          <option value={5000}>5 Seconds</option>
          <option value={10000}>10 Seconds</option>
          <option value={15000}>15 Seconds</option>
          <option value={30000}>30 Seconds</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
