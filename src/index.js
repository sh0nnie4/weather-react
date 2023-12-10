import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="searchEngine">
      <div className="container">
        <Weather defaultCity="New York" />
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
