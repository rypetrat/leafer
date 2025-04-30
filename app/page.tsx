"use client";

import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 50rem;
  color: green;
`;

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <StyledH1>HAWK_TUAH</StyledH1>
    </>
  );
}
