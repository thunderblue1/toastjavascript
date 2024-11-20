import { createContext, useState } from "react";
import "./App.css";
import { Toast } from "./components/Toast";
import { ToastMaker } from "./components/ToastMaker";
import { ToastContainer } from "./components/ToastContainer";

export const ToastContext = createContext(null);

function App() {
  const [toastBox, setToastBox] = useState([]);

  //Kyle Cook of WebDevSimplified gave me the idea to put the toasts in separate
  //containers based on their position by using reduce

  const toastPositions = toastBox.reduce((grouped, toast) => {
    if (grouped[toast.position] == null) {
      grouped[toast.position] = [];
    }
    grouped[toast.position].push(toast);
    return grouped;
  }, {});

  //Leveraging Object.entries and using map to access the array
  //for each location was also Kyle Cooks idea.

  //The rest of the code in this application was written by John Keen
  const toastContainers = Object.entries(toastPositions).map(
    ([myClass, toastArray]) => (
      <ToastContainer key={myClass} classPosition={myClass}>
        {toastArray.map((data) => {
          return (
            <Toast
              key={data.id}
              id={data.id}
              duration={data.duration}
              position={data.position}
            >
              {data.message}
            </Toast>
          );
        })}
      </ToastContainer>
    )
  );

  return (
    <ToastContext.Provider value={[toastBox, setToastBox]}>
      {toastContainers}
      <ToastMaker></ToastMaker>
    </ToastContext.Provider>
  );
}

export default App;
