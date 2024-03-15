import { Provider } from "react-redux";

import { MainPage } from "@/pages/MainPage/MainPage";
import { store } from "@/store";

export const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};
