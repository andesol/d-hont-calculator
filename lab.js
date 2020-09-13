const assignSeats = require("./src/utils/assignSeats");
const seats = 7;
const votesPerParty = [340000, 280000, 160000, 60000, 15000];

// const result = [3, 3, 2, 0, 0];
const results = assignSeats(seats, votesPerParty);
console.log(results);
