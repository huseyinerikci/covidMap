import { render, screen } from "@testing-library/react";
import Item from "../pages/home/Item";

test("Gönderilen proplar doğru şekilde kullanılır", () => {
  //test edilecek  bileşen render
  //prop test edilirken içeriğin ne gönderileceği önemli değil sadece değişkene uygun olsun yeter
  render(<Item color="text-red-400" text="Toplam Tesst" value="100M" />);
  const icon = screen.getByTestId("icon");
  expect(icon).toHaveClass("text-red-400");

  //!text kontrolü için 2 yol
  //1-önce element çağır sonra text bak
  const h2 = screen.getByRole("heading");
  expect(h2).toHaveTextContent("100M");
  //2- elementi text göre çağır
  screen.getByText("Toplam Tesst");
});
