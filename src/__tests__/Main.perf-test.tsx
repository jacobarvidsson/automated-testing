import { screen, fireEvent } from "@testing-library/react-native";
import { measurePerformance } from "reassure";
import { Main } from "../Main";

jest.setTimeout(60_000);
test("Async Component", async () => {
  const scenario = async () => {
    const button = screen.getByTestId("app.container");

    // fireEvent.press(button);
    // await screen.findByText("Count: 1");

    // fireEvent.press(button);
    // await screen.findByText("Count: 2");

    // fireEvent.press(button);
    // fireEvent.press(button);
    // fireEvent.press(button);
    // await screen.findByText("Count: 5");
  };

  await measurePerformance(<Main />, { scenario });
});
