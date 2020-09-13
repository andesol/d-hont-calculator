import React from "react";

function Input({ handleSeats, handleVotes, parties, divisions, seats, votes }) {
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Escaños a repartir </th>
                    {Array(Number(parties))
                        .fill(1)
                        .map((party, i) => {
                            return <td key={`Party-${i}`}>Partido {i + 1}</td>;
                        })}
                </tr>
            </thead>
            <tbody>
                {Array(Number(divisions))
                    .fill(0)
                    .map((_division, divisionIdx) => (
                        <tr key={divisionIdx}>
                            <td key={`$text-{divisionIdx}`}>
                                Circunscripción {divisionIdx + 1}
                            </td>
                            <td key={divisionIdx}>
                                <input
                                    type="number"
                                    className="seats-input"
                                    value={seats[divisionIdx]}
                                    onChange={e =>
                                        handleSeats(
                                            divisionIdx,
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </td>

                            {Array(Number(parties))
                                .fill(0)
                                .map((_party, partyIdx) => {
                                    return (
                                        <td
                                            key={`td-${divisionIdx}-${partyIdx}`}
                                        >
                                            <input
                                                key={[divisionIdx, partyIdx]}
                                                className="js-party-cell"
                                                type="number"
                                                value={
                                                    votes[divisionIdx][partyIdx]
                                                }
                                                onChange={e =>
                                                    handleVotes(
                                                        divisionIdx,
                                                        partyIdx,
                                                        Number(e.target.value)
                                                    )
                                                }
                                            />
                                        </td>
                                    );
                                })}
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default Input;
