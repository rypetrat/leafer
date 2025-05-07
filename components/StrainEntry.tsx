"use client";

import styled from "styled-components";
import { Weedprops } from "@/types";
import { useRouter } from "next/navigation";
import getWeedDataByID from "@/lib/getWeedDataByID/routes";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: green;
    color: white;
    width: 100%;
    padding: 16px;
    border-radius: 10px;
    text-align: center;
    border: 2px solid #000000;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
    background-color:rgb(10, 88, 34);
    transform: translateY(-4px);
    }
`;

const Name = styled.h4`
    margin: 0 0 8px;
    font-size: 1rem;
`;

const StyledImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    margin: 0 auto 12px;
    display: block;
`;

const Substat = styled.p`
    margin: 2px 0;
    font-size: 0.85rem;
`;

const StatName = styled.span`
    font-weight: bold;
    color: black;
`;

export default function StrainEntry({ strain }: { strain: Weedprops}) {
    const router = useRouter();
    const strainGenetics = strain.genetics.replace("autoflowering", "").trim()

    const handleClick = async () => {
        // Navigate to the specific strain detail page
        const data = await getWeedDataByID(strain._id);
        // setStrainData(data);
        // router.push('/strain-details')
    }

    

    return (
        <Card onClick={handleClick}>
            <Name><StatName>Strain: </StatName>{strain.name}</Name>
            <StyledImg src={strain.imageUrl} alt={`${strain.name} image`} />
            <Substat><StatName>Genetics: </StatName>{strainGenetics}</Substat>
            <Substat><StatName>%THC: </StatName>{strain.thc}</Substat>
            <Substat><StatName>%CBD: </StatName>{strain.cbd}</Substat>
            {/* saving these for the more in depth info page */}
            {/* <Substat>Description: {strain.description}</Substat> */}
            {/* <Substat>Smell & Flavor(s): {strain.smellAndFlavor.join(", ")}</Substat>
            <Substat>Effect(s): {strain.effect.join(", ")}</Substat> */}
        </Card>
    );
}