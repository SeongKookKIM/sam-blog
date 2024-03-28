import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./features/app/container/App";
import { Provider } from "react-redux";
import store from "./store/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
