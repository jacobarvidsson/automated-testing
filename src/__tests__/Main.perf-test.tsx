import { screen } from "@testing-library/react-native";
import { measurePerformance } from "reassure";
import { Main } from "../Main";

jest.setTimeout(60_000);
test("Async Component", async () => {
  const scenario = async () => {
    screen.getByTestId("app.container");
  };

  await measurePerformance(<Main />, { scenario });
});
