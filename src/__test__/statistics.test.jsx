import { render, screen, waitFor } from "@testing-library/react";
import { totalApi } from "../utils/api";
import Statistics from "../pages/home/Statistics";
import { totalData } from "../utils/constants";
import millify from "millify";

//api istedği atılan fonksiyonu mock la
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("istatistik component testleri", () => {
  //her testten önce bütün mockları temizle
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("bileşen render olunca loader gelir", () => {
    totalApi.get.mockReturnValue(new Promise(() => {}));
    render(<Statistics />);
    //ekranda loader component var
    screen.getByTestId("loader");
  });
  test("api den hata geldiğinde ekranda hata mesajı yazar", async () => {
    totalApi.get.mockRejectedValue(new Error("Hata mesajı"));
    render(<Statistics />);
    //belli bir sürenin ardından(loader yüklenmesi için) hata mesajı basılır
    await waitFor(() => screen.getByText("Üzgünüz bir sorun oluştu"));
  });
  test("api den cevap gelirse ekrana veriler basılır", async () => {
    totalApi.get.mockResolvedValue({ data: { data: totalData } });
    render(<Statistics />);
    //api isteğinin atılmasını bekle ve çağır
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());
    //vaka sayılarını ekrana bas
    screen.getByText(millify(totalData.confirmed));
    screen.getByText(millify(totalData.active));
    screen.getByText(millify(totalData.deaths));
  });
});
