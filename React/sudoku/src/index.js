import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Game from "./Game.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game items={["item1", "item2", "item3"]}>I am a child</Game>);
reportWebVitals();
