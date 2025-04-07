import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// 适配移动端
document.documentElement.style.fontSize = 100 / 750 + "vw"; // 视口的总宽度为 750rem
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
