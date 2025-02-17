import { render, screen } from "@testing-library/react";
import Header from "../pages/detail/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockData } from "../utils/constants";

//redux için sahte store oluşturmak
const mockStore = configureStore([thunk]);

test("store yüklenme anında ekrana loader basılır", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  //ekraanda loader var mı?
  screen.getByTestId("header-loader");
});
test("store yüklenme anında ekranda loader yoktur", () => {
  const store = mockStore({ isLoading: false, error: null, data: null });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  //ekraanda loader yoktur
  const loader = screen.queryByTestId("header-loader");

  expect(loader).toBeNull();
});
test("store'a veri geldiğinde ekrana ülke ve bayrak basılır", () => {
  const store = mockStore({ isLoading: false, error: null, data: mockData });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  screen.getByRole("heading", { name: mockData.country });

  const img = screen.getByAltText(mockData.flag.alt);

  expect(img).toHaveAttribute("src", mockData.flag.png);
});
