"use client";

import getWeedData from "@/lib/getWeedData/routes";
import React, { useEffect, useState } from "react";
import { Weedprops } from "@/types";
import StrainEntry from "@/components/StrainEntry";
import styled from "styled-components";


const StyledOuterDiv = styled.div`
    margin-top: 40px;
    width: 90%;
    margin: 0 auto;
    color: white;
`;

const StyledInnerDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    gap: 20px;
    width: 100%;
    padding: 20px;
`;

const LoadingMessage = styled.div`
    color: white;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 20px;
`;

export default function ViewAll() {
    const [weedData, setWeedData] = useState<Weedprops[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWeedData = async () => {
            try {
                setIsLoading(true);
                const data = await getWeedData();
                setWeedData(data);
                console.log("Weed data set successfully:", data);
            }
            catch (e) {
                console.log("Error fetching weed data:", e);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchWeedData();
    }, []);

    if (isLoading) {
        return <LoadingMessage>Loading All Strains...</LoadingMessage>;
    }

    return (
        <StyledOuterDiv>
            <h1>View all page</h1>
            <StyledInnerDiv>
                {weedData.map((s) => (
                    <StrainEntry key={s._id} strain={s} />
                ))}
            </StyledInnerDiv>
        </StyledOuterDiv>
    );
}