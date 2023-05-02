import React from "react";
import { render } from "@testing-library/react";
import Characters, { Character, Props } from "../components/Characters";

const mockData: Props["data"] = {
  docs: [
    {
      _id: "1",
      name: "Luke Skywalker",
      species: "Human",
      gender: "Male",
      homeworld: "Tatooine",
    },
    {
      _id: "2",
      name: "Leia Organa",
      species: "Human",
      gender: "Female",
      homeworld: "Alderaan",
    },
  ],
  total: 2,
};

describe("Characters component", () => {
  it("renders the correct number of characters", () => {
    const { getByText, queryByText } = render(<Characters data={mockData} />);
    expect(getByText("Luke Skywalker")).toBeInTheDocument();
    expect(getByText("Leia Organa")).toBeInTheDocument();
    expect(queryByText("Darth Vader")).not.toBeInTheDocument();
  });

  it("filters characters based on search input", () => {
    const { getByLabelText, getByText, queryByText } = render(<Characters data={mockData} />);
    const searchInput = getByLabelText("Search:") as HTMLInputElement;
    expect(searchInput).toBeInTheDocument();

    // Enter search term
    searchInput.value = "luke";
    getByText("Luke Skywalker"); // should be visible
    expect(queryByText("Leia Organa")).not.toBeInTheDocument(); // should be hidden

    // Enter a different search term
    searchInput.value = "vader";
    expect(queryByText("Luke Skywalker")).not.toBeInTheDocument(); // should be hidden
    expect(queryByText("Leia Organa")).not.toBeInTheDocument(); // should be hidden

    // Clear search input
    searchInput.value = "";
    getByText("Luke Skywalker");
    getByText("Leia Organa");
  });
});
