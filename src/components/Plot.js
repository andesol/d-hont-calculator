import React from "react";
import { PieChart, Pie, Sector, Cell, Legend } from "recharts";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    padding: 3rem;
`;

function Plot({ dataRaw }) {
    const parties = dataRaw[0].length;
    const resultsAdded = calculateTotal(dataRaw);
    const dataToPlot = resultsAdded.map((seats, i) => ({
        name: `Partido ${i + 1}`,
        value: seats
    }));

    // *********************************************************

    function calculateTotal(dataRaw) {
        let resultsAdded = Array(parties).fill(0);
        dataRaw.forEach(row =>
            row.forEach((item, i) => (resultsAdded[i] += item))
        );
        return resultsAdded;
    }

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
        <Container>
            <PieChart style={{ margin: "0 auto" }} width={1200} height={600}>
                <Legend verticalAlign="top" height={36} />{" "}
                <Pie
                    data={dataToPlot}
                    cx={600}
                    cy={250}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={200}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label
                >
                    {dataToPlot.map((_entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </Container>
    );
}

export default Plot;
