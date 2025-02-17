import { render, screen } from "@testing-library/react";
import { configureStore } from "redux-mock-store";
import Content from "../pages/detail/Content";
import { Provider } from "react-redux";
import { mockData } from "../utils/constants";
const mockStore = configureStore();

test("store yüklenme durumunda ekrana loader gelir", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getAllByTestId("content-loader");
});
test("store hata durumunda ekrana error gelir", () => {
  const store = mockStore({
    isLoading: false,
    error: "mistake return",
    data: null,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getAllByTestId("error");
});
test("store veri geldiğinde nesnedeki her değer için ekrana kart basılır", () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: mockData,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // data nesnesini diziye çevir  sonra test et
  const arr = Object.entries(mockData).filter(([key]) => key !== "flag");

  arr.forEach((item) => {
    //ekrana item in key değeri basılıyor  mu
    screen.getByText(item[0]);
    //ekrana item in value değeri basılıyor  mu
    screen.getByText(item[1]);
  });
});
