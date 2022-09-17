import React from "react";
import { render } from "@testing-library/react";
// import { TestIDs } from "../../../testing";
import Loading from "./Loading";

describe("Loading Component tests", () => {
  it("Testing render", () => {
    const title = "Loading test";
    const { getByTestId, getByText } = render(<Loading title={title} />);
    expect(getByText(title)).toBeDefined();
    // expect(getByTestId(TestIDs.spinner)).toBeDefined();
  });
});
