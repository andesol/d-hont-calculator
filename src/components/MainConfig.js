import React from "react";
import styled from "styled-components";

const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colors.main};
`;

const Label = styled.label`
    margin-right: 2rem;
    font-size: 1.2rem;
`;

const Input = styled.input`
    margin-left: 0.65rem;
    padding: 0.3rem;
    width: 5rem;
`;

function MainConfig({ handleDivisions, handleParties, divisions, parties }) {
    return (
        <MainSection>
            <Label htmlFor="divisions">
                Circunscripciones
                <Input
                    id="divisions"
                    className="divisions"
                    type="number"
                    value={divisions}
                    onChange={e => handleDivisions(Number(e.target.value))}
                />
            </Label>
            <Label htmlFor="parties">
                Partidos
                <Input
                    id="parties"
                    className="parties"
                    type="number"
                    value={parties}
                    onChange={e => handleParties(Number(e.target.value))}
                />
            </Label>
        </MainSection>
    );
}

export default MainConfig;
