import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="searchEngine">
      <div className="container">
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
    </div>
  </StrictMode>
);
