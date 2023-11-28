import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";
import "./Style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="searchEngine">
      <h1>Weather Search Engine</h1>

      <Search />
    </div>
    <br />
    <footer>
      <a
        href="https://github.com/sh0nnie4/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Open source code
      </a>{" "}
      by Shontay Arrington
    </footer>
  </StrictMode>
);
