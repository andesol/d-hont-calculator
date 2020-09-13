import React, { useState } from "react";
import "./App.css";
import Theme from "./Theme";
import Selectors from "./components/MainConfig";
import Input from "./components/Input";
import Plot from "./components/Plot";
import { assignSeats } from "./utils/assignSeats";

function App() {
    const [divisions, setDivisions] = useState(1);
    const [parties, setParties] = useState(2);
    const [seats, setSeats] = useState([0]);
    const [votes, setVotes] = useState([[0, 0]]);
    const [seatsAllocated, setSeatsAllocated] = useState(null);

    const handleDivisions = function(divisions) {
        setDivisions(divisions);
        const newSeats = getNewRows(seats, divisions, 1);
        setSeats(newSeats);
        const newVotes = getNewRows(votes, divisions, parties);
        setVotes(newVotes);

        // ********************************************************

        function getNewRows(source, rows, columns) {
            let newSource = [];
            for (let i = 0; i < rows; i++) {
                newSource.push(source[i] || [...Array(columns)].fill(0));
            }
            return newSource;
        }
    };

    const handleParties = function(parties) {
        setParties(parties);
        const newVotes = getNewColumns(votes, parties);
        setVotes(newVotes);

        // ********************************************************

        function getNewColumns(source, columns) {
            let newSource = [];
            for (let i = 0; i < source.length; i++) {
                newSource.push([]);
                for (let j = 0; j < columns; j++) {
                    newSource[i].push(source[i][j] || 0);
                }
            }
            return newSource;
        }
    };

    const handleSeats = function(row, seatsDivision) {
        const newSeats = [...seats];
        newSeats[row] = seatsDivision;
        setSeats(newSeats);
    };

    const handleVotes = function(row, col, value) {
        const newVotes = [...votes];
        newVotes[row][col] = value;
        setVotes(newVotes);
    };

    const getResults = function() {
        let seatsAllocated = [];
        for (let i = 0; i < divisions; i++) {
            const seatsAllocatedDivision = assignSeats(seats[i], votes[i]);
            seatsAllocated.push(seatsAllocatedDivision);
        }

        setSeatsAllocated(seatsAllocated);
    };

    return (
        <div className="App">
            <Theme>
                <section>
                    <Selectors
                        handleDivisions={handleDivisions}
                        handleParties={handleParties}
                        divisions={divisions}
                        parties={parties}
                    />
                </section>
                <section className="input-section">
                    <Input
                        handleSeats={handleSeats}
                        handleVotes={handleVotes}
                        parties={parties}
                        divisions={divisions}
                        seats={seats}
                        votes={votes}
                    />
                </section>
                <section className="plot-section">
                    <button className="btn" onClick={getResults}>
                        Calculate!
                    </button>
                    {seatsAllocated && <Plot dataRaw={seatsAllocated} />}
                </section>
            </Theme>
        </div>
    );
}

export default App;
