"use client";

import styled from "styled-components";
import React, { useState } from "react";
import getWeedDataByName from "@/lib/getWeedDataByName/routes";
import { useRouter } from "next/navigation";


const StyledOuterDiv = styled.div`
    text-align: center;
    margin-top: 80px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
`;

const StyledInnerDiv = styled.div`
    background-color: green;
    margin-bottom: 50px;
    padding: 2%;
    padding-bottom: 3%;
    margin: 0 auto;
    width: 30%;
    border-radius: 6px;
    border: 2px solid #000000;
    color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
    padding: 8px;
    margin: 0 10px;
    border: 2px solid #000000;
    border-radius: 4px;
    font-size: calc(7px + 0.5vw);
`;

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: green;
    margin-top: 10px;
    color: white;
    border: 2px solid #000000;
    border-radius: 4px;
    cursor: pointer;
    font-size: calc(10px + 0.5vw);
    &:hover {
        background-color: darkgreen;
    }
`;

export default function Search() {
    const [strain, setStrain] = useState("");
    const router = useRouter();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await getWeedDataByName(strain); 
            router.push("/strain-search");
        }
        catch (err) {

        }
    }

    return (
        <StyledOuterDiv>
            <StyledInnerDiv>
                <h1>Search for a specific strain</h1>
                <form onSubmit={handleSearch}>
                    <StyledInput 
                        type="text"
                        value={strain}
                        onChange={(e) => setStrain(e.target.value)}
                        placeholder="Strain Name"
                        required
                    />
                    <StyledButton type="submit">Search</StyledButton>
                </form>
            </StyledInnerDiv>
        </StyledOuterDiv>
    );
}