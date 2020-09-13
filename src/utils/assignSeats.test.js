import { assignSeats } from "./assignSeats";

describe("seat allocation works for one division", () => {
    test("5 seats, 3 parties", () => {
        const seats = 5;
        const votesPerParty = [20, 15, 25];
        const resultsExpected = [2, 1, 2];
        const results = assignSeats(seats, votesPerParty);

        expect(results).toEqual(resultsExpected);
    });

    test("7 seats, 5 parties", () => {
        const seats = 7;
        const votesPerParty = [340000, 280000, 160000, 60000, 15000];
        const resultsExpected = [3, 3, 1, 0, 0];
        const results = assignSeats(seats, votesPerParty);

        expect(results).toEqual(resultsExpected);
    });
});
