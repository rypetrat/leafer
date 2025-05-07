import { Weedprops } from "@/types";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: separate;
  border-spacing: 40px 0;
  background-color: #005bb5;
  color: white;
  border: 2px solid #000000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const StyledTh = styled.th`
  color:rgb(32, 32, 32);
`;

const StyledTd = styled.td`
  padding: 10px;
  text-align: center;
`;

const StyledDiv = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  padding: 0.25%;
`;

export default function StrainContent({strain}: {strain: Weedprops}) {
    return (
        <StyledDiv>
        <StyledTable>
          <thead>
          <tr>
            <StyledTh><u>Name</u></StyledTh>
            <StyledTh><u>Genetics</u></StyledTh>
            <StyledTh><u>THC %</u></StyledTh>
            <StyledTh><u>CBD %</u></StyledTh>
            <StyledTh><u>Description</u></StyledTh>
            <StyledTh><u>Smell/Flavor</u></StyledTh>
            <StyledTh><u>Effect(s)</u></StyledTh>
          </tr>
          </thead>
          <tbody>
          <tr>
            <StyledTd>{strain.name}</StyledTd>
            <StyledTd>{strain.genetics}</StyledTd>
            <StyledTd>{strain.thc}</StyledTd>
            <StyledTd>{strain.cbd}</StyledTd>
            <StyledTd>{strain.description}</StyledTd>
            <StyledTd>{strain.smellAndFlavor}</StyledTd>
            <StyledTd>{strain.effect}</StyledTd>
            <StyledTd> <img src={strain.imageUrl} alt={`${strain.name} image`}/> </StyledTd>
          </tr>
          </tbody>
        </StyledTable>
      </StyledDiv>
    );
}
