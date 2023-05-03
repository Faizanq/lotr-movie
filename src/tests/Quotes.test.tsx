import { render } from "@testing-library/react";
import Quotes from "../components/Quotes.tsx";

describe("Quotes", () => {
  it("renders filtered quotes", () => {
    const data = {
      docs: [
        {
          id: "1",
          dialog: "This is a long quote with more than 10 characters.",
          character: "John",
          movie: "The Movie",
        },
        {
          id: "2",
          dialog: "Short",
          character: "Jane",
          movie: "The Movie",
        },
      ],
    };

    const { getByText, queryByText } = render(<Quotes data={data} />);

    const longQuote = getByText(
      "This is a long quote with more than 10 characters."
    );
    expect(longQuote).toBeInTheDocument();

    const shortQuote = queryByText("Short");
    expect(shortQuote).not.toBeInTheDocument();
  });
});
