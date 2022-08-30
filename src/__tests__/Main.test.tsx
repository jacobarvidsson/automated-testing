import { Main } from "../Main";
import { render } from "@testing-library/react-native";

describe("<App />", () => {
  it("has 1 child", () => {
    const { getByTestId, getByText } = render(<Main />);
    expect(getByTestId("app.container")).toBeTruthy();
    expect(getByText("Welcome to the app")).toBeTruthy();
  });
});
