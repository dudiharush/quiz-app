import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="bg bg-slate-800 text-slate-100 h-full">
      <App />
    </div>
  </React.StrictMode>
);
