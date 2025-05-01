"use client";

import styled from "styled-components";
import { Weedprops } from "@/types";
import { useRouter } from "next/navigation";
import getWeedData from "@/lib/getWeedData/routes";

const Card = styled.div`
  background-color: green;
  color: white;
  width: 180px;
  margin: 10px;
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
  border-radius: 50%;
  margin-bottom: 12px;
`;

const Substat = styled.p`
  margin: 2px 0;
  font-size: 0.85rem;
`;

export default function StrainEntry({ strain }: { strain: Weedprops}) {
    const router = useRouter();

    const handleClick = async () => {
        // Navigate to the specific strain detail page
        // const data = await getWeedDataByID(); 
    }

    return (
        <Card onClick={handleClick}>
            <Name>Name: {strain.name}</Name>
            <StyledImg src={strain.imageUrl} alt={`${strain.name} image`} />
            {/* <Substat>Description: {strain.description}</Substat> */}
            <Substat>Genetics: {strain.genetics}</Substat>
            <Substat>%THC: {strain.thc}</Substat>
            <Substat>%CBD: {strain.cbd}</Substat>
            <Substat>Smell & Flavor(s): {strain.smellAndFlavor.join(", ")}</Substat>
            <Substat>Effect(s): {strain.effect.join(", ")}</Substat>
        </Card>
    );
}