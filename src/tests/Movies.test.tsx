import { render } from "@testing-library/react";
import Movies from "../components/Movies";
test("renders Movies component without crashing", () => {
  render(<Movies data={{ docs: [] }} />);
});

test("renders movie names", () => {
  const testData = {
    docs: [
      {
        _id: "1",
        name: "The Lord of the Rings",
        director: "Peter Jackson",
        year: "2001",
      },
      {
        _id: "2",
        name: "The Hobbit",
        director: "Peter Jackson",
        year: "2012",
      },
    ],
  };

  const { getByText } = render(<Movies data={testData} />);
  expect(getByText("The Lord of the Rings")).toBeInTheDocument();
  expect(getByText("The Hobbit")).toBeInTheDocument();
});

test("handles empty data correctly", () => {
  const { getByText } = render(<Movies data={{ docs: [] }} />);
  expect(getByText.length === 0);
});
