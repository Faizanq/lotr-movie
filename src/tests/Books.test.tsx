import { render } from "@testing-library/react";
import Books from "../components/Books";

// renders without crashing:
test("renders Books component without crashing", () => {
  render(<Books data={{ docs: [] }} />);
});

//   Test that the Books component displays book data correctly:
test("displays book data correctly", () => {
  const testData = {
    docs: [
      {
        id: "1",
        name: "Book1",
        author: "Author1",
        published: "2022-05-01",
      },
      {
        id: "2",
        name: "Book2",
        author: "Author2",
        published: "2023-01-01",
      },
    ],
  };
  const { getByText } = render(<Books data={testData} />);
  expect(getByText("Book1")).toBeInTheDocument();
  expect(getByText("Author1")).toBeInTheDocument();
  expect(getByText("2022-05-01")).toBeInTheDocument();
  expect(getByText("Book2")).toBeInTheDocument();
  expect(getByText("Author2")).toBeInTheDocument();
  expect(getByText("2023-01-01")).toBeInTheDocument();
});

// Test that the Books component handles empty data correctly:
test("handles empty data correctly", () => {
  const { getByText } = render(<Books data={{ docs: [] }} />);
  expect(getByText.length === 0);
});
