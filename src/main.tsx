import ReactDOM from "react-dom/client";
import AppRouter from "@/routes/AppRouter";

// redux
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

import { Toaster } from "./components/ui/toaster";

import "./services/axios-global";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
      <Toaster />
    </PersistGate>
  </Provider>,
);
