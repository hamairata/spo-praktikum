import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Jadwal from "./page-praktikan/Jadwal";
import Sidebar from "./component/sidebar";
import Kalender from "./component/kalender";
import { ContextProvider } from "./Context";

const rootElement = document.getElementById("root");
render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  rootElement
);
