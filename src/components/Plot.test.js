import React from "react";
import { render } from "@testing-library/react";
import Plot from "./Plot";

test("renders content", () => {
    const dataRaw = [
        [1, 2, 3],
        [1, 2, 3]
    ];
    const component = render(<Plot dataRaw={dataRaw} />);

    expect(component.container).toHaveTextContent("Partido 3");
});
